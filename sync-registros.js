(function () {
  "use strict";

  // Fonte central de atividades. A planilha é somente de leitura para visitantes.
  // Os lançamentos são feitos pelo proprietário no Google Sheets (inclusive via ChatGPT).
  var SPREADSHEET_ID = "1kUDOgFBoYrtLISu6v1bxhVNCa4BmGeTf4OU4GeMJt5M";
  var STORAGE_KEY = "central-estudos-registros-v1";
  var REFRESH_INTERVAL_MS = 5 * 60 * 1000;
  var running = false;
  var statusTimer = null;

  function normalizeCode(value) {
    var found = String(value == null ? "" : value).trim().toUpperCase().match(/^([A-Z/]+)\s*0*(\d+)\b/);
    return found ? found[1] + " " + Number(found[2]) : "";
  }

  function numberOrZero(value) {
    var n = Number(value);
    return Number.isSafeInteger(n) && n >= 0 ? n : 0;
  }

  function text(value) {
    return value == null ? "" : String(value).trim();
  }

  function stageName(value) {
    var valueText = text(value);
    return /^(EI|INICIAL|ESTUDO INICIAL)$/i.test(valueText) ? "Estudo inicial" : valueText;
  }

  function dateIsValid(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(text(value));
  }

  function rowsFromGoogle(response) {
    if (!response || response.status !== "ok" || !response.table || !Array.isArray(response.table.rows)) {
      throw new Error("Resposta da planilha inválida ou acesso não liberado");
    }
    var headings = response.table.cols.map(function (col) { return text(col.label).toLowerCase(); });
    if (!headings.includes("codigo") && !headings.includes("id")) {
      throw new Error("A aba foi encontrada, mas os cabeçalhos não correspondem à base");
    }
    return response.table.rows.map(function (row) {
      var result = {};
      (row.c || []).forEach(function (cell, i) {
        if (headings[i]) result[headings[i]] = cell && cell.v != null ? cell.v : "";
      });
      return result;
    });
  }

  function fetchTab(name) {
    return new Promise(function (resolve, reject) {
      var callback = "__centralSheetResponse_" + name.replace(/[^A-Za-z]/g, "") + "_" + Math.floor(Math.random() * 1000000000);
      var script = document.createElement("script");
      var timer = null;
      var done = false;
      function finish(error, result) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (script.parentNode) script.parentNode.removeChild(script);
        try { delete window[callback]; } catch (_) { window[callback] = undefined; }
        if (error) reject(error); else resolve(result);
      }
      window[callback] = function (data) {
        try { finish(null, rowsFromGoogle(data)); }
        catch (error) { finish(error); }
      };
      script.async = true;
      script.onerror = function () { finish(new Error("Leitura da aba " + name + " não autorizada")); };
      script.src = "https://docs.google.com/spreadsheets/d/" + encodeURIComponent(SPREADSHEET_ID) +
        "/gviz/tq?sheet=" + encodeURIComponent(name) +
        "&headers=1&tqx=" + encodeURIComponent("out:json;responseHandler:" + callback) +
        "&nocache=" + Date.now();
      timer = setTimeout(function () { finish(new Error("Tempo excedido ao consultar " + name)); }, 18000);
      document.head.appendChild(script);
    });
  }

  function showStatus(message, warning) {
    var badge = document.getElementById("centralSheetSyncStatus");
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "centralSheetSyncStatus";
      badge.setAttribute("role", "status");
      badge.setAttribute("aria-live", "polite");
      badge.style.cssText = "position:fixed;right:12px;bottom:12px;z-index:1000;max-width:300px;padding:8px 12px;border-radius:9px;font:12px/1.45 system-ui,sans-serif;box-shadow:0 3px 12px #0002;";
      document.body.appendChild(badge);
    }
    badge.style.background = warning ? "#fff4d5" : "#e0f4e9";
    badge.style.color = warning ? "#6f4800" : "#165338";
    badge.textContent = message;
    badge.hidden = false;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(function () { badge.hidden = true; }, warning ? 22000 : 9000);
  }

  function mergeRows(activityRows, revisionRows) {
    var raw = localStorage.getItem(STORAGE_KEY);
    var data = raw ? JSON.parse(raw) : {};
    ["studies", "reviews", "attempts", "classifications", "pendencies", "simulations", "writings"].forEach(function (key) {
      if (!Array.isArray(data[key])) data[key] = [];
    });
    var planTag = document.getElementById("planData");
    if (!planTag) throw new Error("O planejamento local não foi encontrado");
    var plan = JSON.parse(planTag.textContent).filter(function (item) { return !item.archived; });
    var planById = Object.fromEntries(plan.map(function (item) { return [item.id, item]; }));
    var changed = false;
    var imported = 0;
    var planned = 0;

    function codeOf(obj) {
      return normalizeCode(obj.topic || obj.code) ||
        normalizeCode(planById[obj.planId] && planById[obj.planId].code);
    }
    function locateUnit(code, source) {
      var candidates = plan.filter(function (item) { return normalizeCode(item.code) === code; });
      return candidates.find(function (item) { return item.flow === (source === "TEC" ? "Q" : "A"); }) ||
        candidates.find(function (item) { return item.flow === "A"; }) || candidates[0] || null;
    }
    function setIfDifferent(obj, name, value) {
      if (obj[name] !== value) { obj[name] = value; changed = true; }
    }
    function stableId(prefix, pieces) {
      return prefix + "-" + pieces.join("-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "-").toLowerCase();
    }

    activityRows.forEach(function (row) {
      var day = text(row.data), code = normalizeCode(row.codigo);
      var stage = stageName(row.etapa);
      var source = text(row.fonte).toUpperCase() === "TEC" ? "TEC" : "ChatGPT";
      if (!dateIsValid(day) || !code || !["Estudo inicial", "D+1", "D+7", "D+30"].includes(stage)) return;
      if (!/^(conclu[ií]d[oa]|realizad[oa])$/i.test(text(row.situacao))) return;
      var unit = locateUnit(code, source);
      if (!unit) { console.warn("Tópico da planilha ausente do planejamento", code); return; }
      var topic = unit.code + " — " + unit.title;
      var minutes = numberOrZero(row.minutos);
      var scores = {cs:numberOrZero(row.as),cu:numberOrZero(row.ai),ws:numberOrZero(row.es),wu:numberOrZero(row.ei)};
      var report = text(row.origem_relatorio);
      var notes = text(row.observacoes);
      var study = data.studies.find(function (st) {
        return !st.resetForRedo && st.status === "Concluído" && codeOf(st) === code;
      });

      if (stage === "Estudo inicial" && !data.studies.some(function (st) {
        return !st.resetForRedo && codeOf(st) === code && st.date === day && st.status === "Concluído";
      })) {
        study = {id:stableId("sheet-study", [day,code,source]),planId:unit.id,subject:unit.subject,
          topic:topic,activity:unit.flow === "Q" ? "Questões" : "Aprofundamento",
          status:"Concluído",date:day,durationMinutes:minutes,recordOrigin:"google-sheets",reportId:report};
        data.studies.push(study);
        changed = true;
      }

      var attempt = data.attempts.find(function (item) {
        return !item.resetForRedo && item.date === day && codeOf(item) === code &&
          stageName(item.stage || item.contact) === stage && (text(item.source) || "ChatGPT") === source;
      });
      if (!attempt) {
        attempt = {id:stableId("sheet-attempt", [day,code,stage,source]),
          planId:unit.id,studyId:study ? study.id : null,subject:unit.subject,topic:topic,
          stage:stage,source:source,date:day,recordOrigin:"google-sheets",reportId:report,
          completionConfirmed:true};
        data.attempts.push(attempt);
        changed = true;
      }
      setIfDifferent(attempt, "durationMinutes", minutes);
      Object.keys(scores).forEach(function (key) { setIfDifferent(attempt,key,scores[key]); });
      if (!attempt.planId) setIfDifferent(attempt, "planId", unit.id);
      if (!attempt.studyId && study) setIfDifferent(attempt, "studyId", study.id);
      if (text(row.dominio)) setIfDifferent(attempt, "domain", text(row.dominio));
      if (text(row.reforco)) setIfDifferent(attempt, "reinforcement", text(row.reforco));
      if (notes && !text(attempt.pedagogicalNotes)) setIfDifferent(attempt,"pedagogicalNotes",notes);
      if (report && !text(attempt.reportId)) setIfDifferent(attempt,"reportId",report);
      if (text(row.data_confirmada).toLowerCase() === "sim" && attempt.effectiveDateConfirmation) {
        setIfDifferent(attempt,"effectiveDateConfirmation","Confirmada");
      }
      if (numberOrZero(row.nc) > 0) setIfDifferent(attempt,"unclassifiedCount",numberOrZero(row.nc));
      imported += 1;

      if (stage !== "Estudo inicial") {
        var review = data.reviews.find(function (r) {
          return !r.resetForRedo && r.stage === stage && codeOf(r) === code &&
            ((r.doneDate === day && r.status === "Realizada") || (!r.doneDate && r.status !== "Realizada"));
        });
        if (!review) {
          review = {id:stableId("sheet-review", [day,code,stage]),
            studyId:study ? study.id : unit.id,planId:unit.id,subject:unit.subject,topic:topic,
            stage:stage,plannedDate:day,status:"Realizada",doneDate:day,
            recordOrigin:"google-sheets",reportId:report};
          data.reviews.push(review);
          changed = true;
        }
        setIfDifferent(review,"status","Realizada");
        setIfDifferent(review,"doneDate",day);
        setIfDifferent(review,"durationMinutes",minutes);
      }
    });

    revisionRows.forEach(function (row) {
      var code = normalizeCode(row.codigo), stage = stageName(row.etapa), when = text(row.proxima_data);
      if (!code || !["D+1","D+7","D+30"].includes(stage) || !dateIsValid(when)) return;
      if (text(row.situacao) !== "Programada") return;
      var unit = locateUnit(code,"ChatGPT");
      if (!unit) return;
      var topic = unit.code + " — " + unit.title;
      var completed = data.reviews.some(function (r) {
        return !r.resetForRedo && r.status === "Realizada" && r.stage === stage &&
          codeOf(r) === code && r.doneDate === when;
      });
      if (completed) return;
      var review = data.reviews.find(function (r) {
        return !r.resetForRedo && r.status !== "Realizada" && r.stage === stage && codeOf(r) === code;
      });
      if (!review) {
        var study = data.studies.find(function (st) { return !st.resetForRedo && codeOf(st) === code; });
        review = {id:stableId("sheet-planned", [code,stage,when]),
          studyId:study ? study.id : unit.id,planId:unit.id,subject:unit.subject,topic:topic,
          stage:stage,status:"Programada",plannedDate:when,doneDate:"",
          recordOrigin:"google-sheets",reportId:text(row.origem_relatorio)};
        data.reviews.push(review); changed = true;
      } else if (review.plannedDate !== when) {
        // A última programação documental prevalece apenas para revisões não realizadas.
        setIfDifferent(review,"originalPlannedDate",review.originalPlannedDate || review.plannedDate);
        setIfDifferent(review,"plannedDate",when);
      }
      if (text(row.profundidade)) setIfDifferent(review,"reviewDepth",text(row.profundidade));
      planned += 1;
    });

    if (changed) localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    return {changed:changed, imported:imported, planned:planned};
  }

  async function refresh() {
    if (running) return;
    running = true;
    try {
      var results = await Promise.all([fetchTab("Atividades"),fetchTab("Revisoes")]);
      var output = mergeRows(results[0],results[1]);
      if (output.changed) {
        showStatus("Novos registros recebidos. Atualizando a Central de Estudos…",false);
        if (!document.querySelector("dialog[open]")) location.reload();
      } else {
        showStatus("Planilha sincronizada · " + output.imported + " atividades verificadas",false);
      }
    } catch (error) {
      console.warn("[Central de Estudos] Sincronização não concluída:",error);
      showStatus("Sincronização pendente: libere a leitura da planilha Google.",true);
    } finally {
      running = false;
    }
  }

  // Verificação ao abrir o site e periodicamente. Sem alterações de código, sem deploy.
  refresh();
  setInterval(refresh,REFRESH_INTERVAL_MS);
}());
