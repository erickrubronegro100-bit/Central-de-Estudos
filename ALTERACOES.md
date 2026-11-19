# Registro de alterações — Central de Estudos

## 19/11/2026 — Correções de integridade, desempenho e comandos

- **Registros independentes:** o formulário de desempenho não substitui tentativas anteriores do mesmo tópico/data e não replica resultados antigos de origem desconhecida; exclusões continuam condicionadas a confirmação explícita.
- **Backups:** `pendencies` preservadas em exportação e importação; compatibilidade com backups antigos; novas coleções `simulations` e `writings` incluídas; checkpoint local obrigatório antes da importação, com restauração em caso de falha.
- **Revisões:** indicadores diários de obrigação e pendência passam a utilizar `reviewIsRequired`. D+30 e etapas facultativas são mostradas separadamente dos atrasos obrigatórios.
- **Carga diária:** quando o tempo já executado somado à carga prevista ultrapassa 180 minutos, o cronograma exibe alerta. Não altera o calendário nem conclui tarefas.
- **Biblioteca:** visualização renderizada da fonte textual `conteudo`, idêntica à utilizada na cópia/exportação; retiradas somente representações HTML duplicadas. **Todos os 37 comandos, títulos e textos canônicos preservados**. O `index.html` ficou aproximadamente 674 mil caracteres menor.
- **Simulados e discursivas:** seção de acompanhamento em Desempenho geral, com inclusão e exclusão manual de resultados reais. Simulados: acertos/erros/brancos/origem/duração e saldo C−E ilustrativo. Discursivas: modalidade/tema/nota eventual/duração. Nenhum resultado fictício; tempos dessas atividades não são somados automaticamente ao consolidado para evitar dupla contagem.
- **Semana 4:** prevalece o encerramento operacional de 18/11/2026, sem conclusão fictícia. Citações antigas abaixo documentam decisões históricas e não prevalecem sobre a regra final.
- **Validação:** JavaScript compilou sem erros; o catálogo contém as mesmas 650 unidades ativas e 13 arquivadas; 37 conteúdos de comandos preservados. Testadas renderização de Markdown, aceitação de backups antigos, preservação de novas coleções e rejeição de formatos inválidos. **Não equivale a teste interativo completo no navegador nem garante a publicação no Netlify.**

## 18/11/2026 — Adaptação final da metodologia (D+30 preservada)

- **Decisão da Semana 4:** operacionalmente encerrada desde 18/11/2026, sem lançar conclusão fictícia. Os saldos de Aprofundamento/Questões são redistribuídos dinamicamente entre as Semanas 5 a 11; mantidas a pausa de 23 a 28/11, a sequência integrada e as datas históricas efetivas.
- **Revisões adaptativas:** preservada a programação de uma revisão principal D+1 ou D+7 conforme prioridade, desempenho e dificuldades, e revisão adicional somente quando justificada. A versão verificada já possui reconciliação após registro de questões, sem substituir registros históricos.
- **Comandos D+1 e D+7:** normalizada a regra de execução exclusivamente por questões inéditas, resultado geral, correção fundamentada apenas dos erros/acertos inseguros e avaliação breve, sem leitura teórica, resumo ou quadro de conteúdo independente. As Etapas 1 e 2, os quantitativos, o ineditismo e as regras de correção não foram reduzidos. Comandos unificados de RICD/RCCN mantêm suas instruções históricas de D+30.
- **D+30:** comando, filtros de elegibilidade, agendamentos facultativos e indicadores não modificados. Os quatro comandos exclusivos de D+30 permaneceram idênticos.
- **Tempo livre:** reconciliado o cálculo de 180 minutos com tempo já registrado, estudos A, revisões e a reserva diária única de TEC (18 minutos como referência para Questões Q/Complementações C); pendências anteriores TEC podem demandar uma sessão estimada adicional. Estimativa prospectiva considera uma revisão futura D+1 ou D+7 nas sugestões de antecipação, sem agendamento fictício.
- **Última semana:** acrescentadas sugestões facultativas de revisão seletiva P1/P2 com priorização por erros, inseguranças e ⭐ documentados, aproveitando os comandos existentes. Os 31 residuais continuam separados e opcionais.
- **Validações:** sintaxe do script verificada; planData preservado; 37 comandos mantidos; Etapas 1 e 2 inalteradas; sete semanas simuladas com totais diários iguais às metas e sextas não vazias; testes da escolha D+1/D+7 e do encerramento da Semana 4 aprovados. **As metas reais dependem dos registros locais do navegador; o deploy Netlify é independente deste registro.**

## 18/11/2026 — Metodologia definitiva: revisões adaptativas, Semana 4, tempo e comandos

> Esta entrada substitui as regras operacionais incompatíveis das entradas anteriores; os registros antigos permanecem como histórico de evolução, não como instruções vigentes.

- **Revisão principal:** D+1 ou D+7 definida por prioridade P1–P4 e desempenho registrado. P1/P2 com domínio satisfatório tendem a D+7; dificuldades relevantes podem indicar D+1 e D+7 adicional justificada. P3/P4 com dificuldades tendem a D+1; com bom domínio, D+7. Persistência de erros/insegurança pode justificar segunda revisão. Revisões já realizadas preservadas; revisões previamente programadas que não são mais exigidas ficam facultativas, sem atraso.
- **D+30:** sempre facultativa, sem impacto no cumprimento. Painel de sugestões filtra pontos elegíveis a partir de erros, inseguranças ou ⭐ efetivamente registrados, sem presumir destaques não estruturados. Mantidas baterias inéditas e correções dos erros e acertos inseguros.
- **Semana 4 (18–20/11):** não encerrar antecipadamente; manter nove aprofundamentos distribuídos em três dias, reconhecendo os que forem concluídos. O saldo principal segue para as sete semanas 5–11. No cenário de 230 aprofundamentos ainda pendentes em 18/11, são 9 nesta semana e 221 nas sete seguintes. **Os totais efetivos dependem dos históricos locais** e serão ajustados sem marcar conclusões.
- **Questões TEC:** rotina de referência 15–20 min por dia incluída nas três horas, com reserva de 18 min na estimativa e distribuição das unidades Q para evitar concentração na Semana 4. Sem alterar questões, filtros ou dados TEC.
- **Tempo disponível:** mesmo cálculo para os cartões do cronograma e para «Aproveitar tempo livre». Considera tempo líquido registrado, estudos e revisões obrigatórios ainda não realizados, pendências anteriores e reserva diária única para TEC; não multiplica a reserva por caderno. É estimativa sujeita ao tempo real.
- **Antecipações:** exigem confirmação antes de abrir o estudo; abrir não conclui. Ao registrar a conclusão, as metas semanais são recalculadas e o tópico deixa de integrar as pendências futuras.
- **Última semana (10–15/01):** 31 tópicos residuais legislativos mantidos como opcionais, fora das quotas obrigatórias; o próprio painel possibilita acessar as revisões existentes para seleção final P1/P2, erros, inseguranças e ⭐.
- **Comandos:** somente 40 ocorrências da frase introdutória sobre a obrigatoriedade da D+7 foram harmonizadas, nos textos e na apresentação dos 37 documentos. Corpo pedagógico, quantidade de questões, etapas, identificadores e regras de correção integralmente preservados; contexto de abertura do comando atualizado.
- **Verificações:** scripts principais com sintaxe válida; simulações isoladas da alocação testaram 9+221, 3 estudos concluídos no dia 18/11 e redistribuição pós-semana 4, com totais A/Q diários iguais às metas semanais. Os dados locais reais do navegador e o deploy Netlify não foram testados nesta auditoria.

## 18/11/2026 — Separação de pendências anteriores e agenda do dia

- O botão **Atividades pendentes (estudos e revisões)** agora mostra apenas tarefas vencidas em dias anteriores à data corrente, sem incluir atividades programadas para hoje ou para datas futuras.
- Inclui estudos A/Q não concluídos em dias anteriores, revisões D+1/D+7 obrigatórias ainda não realizadas e complementações TEC liberadas/agendadas em datas anteriores ainda não concluídas.
- Estudos, revisões e TEC atrasados deixam de ser inseridos automaticamente nos painéis da agenda do dia, evitando duplicidades; as tarefas da data continuam em seus painéis normais.
- Os indicadores passam a distinguir **Pendentes do dia** de **Pendências anteriores**. D+30 facultativas e D+1 adaptativas não exigidas continuam fora das pendências obrigatórias.
- Metas futuras já redistribuídas para novas datas não são tratadas como atrasadas antes da nova data prevista. Nenhum registro de execução foi excluído.

## 18/11/2026 — Cronograma das sete semanas restantes e botão de pendências

- **Cronograma diário das Semanas 5–11 (29/11/2026 a 15/01/2027):** calendário detalhado disponível para todas as semanas restantes, com seletor direto por semana e navegação entre dias e semanas.
- **Distribuição de domingo a sexta:** removida a condição que excluía as sextas-feiras, garantindo que as atividades de Aprofundamento (A) e Questões (Q) de cada semana sejam integralmente distribuídas pelos seis dias. Incluída validação da soma diária contra a meta A+Q; sábado permanece livre.
- **Metas semanais:** seleção das Semanas 5–11 também na visão de metas, com acesso às listas de tópicos. A distribuição futura permanece recalculável após encerramentos, sem alterar registros já concluídos, prioridades ou a sequência pedagógica.
- **Atividades pendentes (estudos e revisões):** novo botão expansível, inicialmente recolhido, que reúne estudos A/Q, complementações TEC e revisões obrigatórias D+1/D+7 não concluídas, incluindo atrasadas. As D+30 facultativas permanecem separadas do controle de pendências.
- **Navegação:** setas e campo de data passam a percorrer todas as semanas restantes; o total de cada semana é exibido no seletor.
- **Validação:** sintaxe dos scripts principais conferida; sete semanas simuladas com metas A/Q distribuídas em seis dias e sexta-feira não vazia. O resultado efetivo depende dos registros salvos no navegador.

## 18/11/2026 — Metodologia adaptativa, classificações e cronograma diário

- Classificados os **308 tópicos teóricos ativos** por prioridade estratégica (P1–P4) e densidade (Curto/Médio/Denso), seguindo as tabelas consolidadas do estudante: Ciência Política 36, RICD/PL/RCCN 131, LP/LING 87 e RFIA 54. Preservados códigos, títulos, ordem, 31 residuais e todos os cadernos TEC.
- Referências teóricas conjuntas das Etapas 1–3: **3/5/7 minutos**, exceto RFIA (**6/10/15 minutos**), conforme densidade. São referências flexíveis, sem alterações das quantidades de questões, da exigência de ineditismo ou dos critérios de correção. Inseridas notas de compatibilidade nos comandos originais, sem reconstruir suas etapas.
- **3h líquidas por dia, de domingo a sexta**; TEC regular de 15–20 minutos dentro dessa meta; sábado sem obrigação.
- Semana 4 encerrada operacionalmente para novos estudos, **sem dar baixa em itens não realizados**. Os tópicos A pendentes do planejamento principal são distribuídos pelas Semanas 5 a 11 (meta de referência de 230: 33/33/33/33/33/33/32, conforme histórico efetivamente disponível no navegador). Os 31 legislativos residuais ficam fora das metas obrigatórias e disponíveis em «Aproveitar — Complementação» na última semana.
- **D+7 obrigatória**; **D+1 adaptativa** a dificuldades registradas, com opção de pular; **D+30 sempre facultativa**, agrupada por P1/P2/P3/P4, sem atraso ou pendência obrigatória. Puladas podem ser reativadas.
- Cronograma diário preservado em sua estrutura, com **Revisões atrasadas**, **Estudos atrasados**, meta de tempo, tempo programado e folga estimada. Botão **Aproveitar tempo livre** ao final; sugestões respeitam sequência, saldos estimados e revisão D+7 futura. Abertura do bloco não registra conclusão automática. Complementação TEC continua vinculada a gatilhos.
- Importação idempotente do relatório de **17/11/2026**: 11 revisões, 346 questões, 333 acertos e 123 minutos, com ressalva de confirmação documental da data do PL 21; registros anteriores preservados.
- Os dados de execução permanecem armazenados no navegador (localStorage), **sem sincronização automática com ChatGPT, TEC ou outros aparelhos**. Usar exportação/importação para transportar registros; a publicação no Netlify depende do deploy da branch main.

Este arquivo registra as solicitações de organização e apresentação do site. Alterações de interface não eliminam dados históricos dos estudos.

## 17/11/2026 — Reorganização LP/LING e sequência legislativa (RICD/PL/RCCN)

- **LP/LING:** 100 unidades teóricas originais → **87 unidades ativas** após 10 aglutinações (13 códigos incorporados), mantendo os 13 IDs e códigos históricos arquivados, não exibidos como atividades independentes.
- **LP/LING/TEC:** **70 cadernos mantidos**, numerados 1–70 e reclassificados em sua categoria pedagógica como “Estudos Iniciais – Questões”, preservado o fluxo técnico C, os registros e os ciclos de revisão. Quatro vínculos remapeados: LP/LING/TEC 50 (LP/LING 55 → LP/LING 53); LP/LING/TEC 59 (LP/LING 75 → LP/LING 74); LP/LING/TEC 60 (LP/LING 77 → LP/LING 76); LP/LING/TEC 64 (LP/LING 87 → LP/LING 86).
- **Sequência LP/LING:** 157 unidades ativas (87 teoria + 70 TEC), derivadas da sequência integrada existente com exclusão das 13 unidades históricas autônomas e preservação da ordem dos cadernos e dos gatilhos. **CSV de referência ainda não localizado:** pendente apenas confronto literal com o arquivo externo solicitado.
- **PDFs:** os dez IDs do Drive fornecidos correspondem aos já cadastrados; mantidos e padronizados os dez links principais. Todos os demais 77 links teóricos foram mantidos. Os 87 IDs de PDFs ativos foram confrontados com o conteúdo da pasta conectada do Drive e encontrados (acessibilidade anônima não comprovada).
- **RICD/PL/RCCN:** 131 códigos e IDs preservados, com os 100 primeiros do bloco prioritário e 31 do residual na exata sequência numérica fornecida, sem alteração de títulos nem numeração original dos PDFs.
- **Histórico:** nenhum estudo, revisão, resultado, tempo líquido, autoavaliação ou registro de tentativa foi excluído ou regravado. Tópicos aglutinados estudados parcialmente não contam como bloco concluído, exceto quando todas as partes históricas estejam concluídas.
- **Planejamento:** datas-base, janela final, regras de revisão e metas fixadas por código não foram modificadas; a distribuição operacional por semanas da própria aplicação pode recalcular quantidades e ordem das unidades pendentes em função do catálogo atualizado.
- **Validações:** 650 unidades ativas no total; LP/LING 87+70=157; 131 legislativas em blocos 100/31; 13 códigos LP arquivados; dez títulos; 70 gatilhos válidos; JavaScript sintaticamente válido.
- **Netlify:** publicação requer verificação separada.

## 11/11/2026

| Nº | Área | Alteração | Situação |
| --- | --- | --- | --- |
| 01 | Desempenho | Ocultar o painel "Relatório Final de Desempenho — 09/11/2026", preservando os registros de origem | Concluída no código |
| 02 | Desempenho · Quadro geral | Retirar a seção "Resultados por tópico" apenas do Quadro geral, mantendo o detalhamento nas páginas específicas de disciplina | Concluída no código |
| 03 | Desempenho · Quadro geral | Retirar o painel "Último dia · tempo por disciplina" | Concluída no código |
| 04 | Desempenho · Quadro geral | Retirar os nove cartões de resultados e tempo do último dia, incluindo as contagens gerais de ChatGPT, TEC e respostas inseguras daquela linha | Concluída no código |
| 05 | Revisões · Quadro geral | Exibir somente alerta de atrasadas e previstas hoje, quadro D+1/D+7/D+30 e cartões de vencendo hoje, atrasadas, concluídas, total, programadas, realizadas, pendentes e não realizadas | Concluída no código |
| 06 | Estudos / Progresso | Padronizar títulos dos cartões de progresso e seus rótulos para inicial maiúscula, mantendo a sigla TEC | Concluída no código |
| 07 | Visão geral | Padronizar os títulos e rótulos de indicadores para inicial maiúscula, preservando siglas técnicas | Concluída no código |
| 08 | Identidade visual | Equilibrar azul e verde da paleta associada à Câmara dos Deputados, inclusive nos temas claro e escuro, painéis, navegação e barras de progresso | Concluída no código |

### Histórico de implementação

- Alteração 01: commit `5a4bc8899927fac8728457e7229717d532acbf87`.
- Alterações 02 e 03: já constavam no código na revisão anterior a este registro.
- Alterações 04 a 08: commit `e0f4ea8a478460c9af032b0e60202f8e865d95e0`.
- Ajuste final da capitalização de “Visão geral” e “Quadro geral”: commit `81135a53bc54d5499b321c2a9082e561e5fa5fdf`.
- O código JavaScript foi validado sintaticamente após a atualização.
- A disponibilidade da versão publicada no Netlify precisa ser confirmada separadamente; commits no GitHub, por si só, não comprovam a publicação.

## 11/11/2026 — fechamento diário e reagendamento

- Importados os 19 registros concluídos em 11/11 (4 estudos iniciais de aprofundamento, 4 estudos iniciais TEC, 5 complementações TEC e 6 revisões D+1), com 359 questões e 162 minutos líquidos.
- Total conferido: 324 acertos seguros, 26 acertos inseguros, 5 erros seguros e 4 erros inseguros; 350/359 acertos (97,49%).
- Importação idempotente por identidade de sessão, com equivalência para lançamentos manuais. Nenhum estudo histórico deve ser apagado ou contado duas vezes.
- Dia 11/11 encerrado; pendências dos estudos iniciais redistribuídas entre 12 e 13/11. Após correção solicitada, **Aprofundamento segue a sequência integrada original em blocos consecutivos**, sem alternância por peso/tempo (quando o saldo for 18 unidades, 9 + 9). Questões TEC conservam ordem própria. RFIA 5 permanece pendente e integra o primeiro bloco.
- Revisões D+1, D+7 e D+30 mantêm suas datas-base; realizações de 11/11 são registradas nos ciclos correspondentes, sem reiniciar prazos.
- Commits de código: `eafb6c56d9d567075226127942a48a90bcabe020`, `db151ccd75f5746bcc2cc929983dd745326c6604`.
- Validação: correspondência dos 19 códigos no plano; soma de 359 questões/162 minutos; compilação sintática da rotina JavaScript; teste da redistribuição sem omissões nem duplicações.
- Correção da ordem do cronograma da Semana 3: commit `208b289b53188223e68bf4dfae9ec545e5f8305b`. Alterado exclusivamente o critério de divisão e a nota explicativa da semana, sem mexer em resultados ou revisões.
- Correção de exibição de Complementação TEC (commit `3ae42e217bbb3227d70ab0ed506d7ed309df045d`): os 5 primeiros contatos concluídos em 11/11 permanecem visíveis como concluídos no Cronograma do dia, separados das pendências. Conferida a geração de 5 revisões D+1 para 12/11, 5 D+7 para 18/11 e 5 D+30 para 11/12. Não se alterou a lógica de conclusão de revisões, nem a sequência 9+9 dos estudos pendentes.
- Publicação do Netlify: **não confirmada**. Alteração no GitHub não garante que o domínio indicado esteja mostrando esta versão.

## 11/11/2026 — complemento definitivo (RCCN 16 e RCCN 17)

- Corrigido o fechamento diário de 19 para **21 atividades** (6 Aprofundamentos, 4 Questões TEC, 5 Complementações TEC e 6 revisões D+1); 8 disciplinas, 21 tópicos distintos.
- Totais definitivos conferidos: **417 questões; 380 AS; 26 AI; 7 ES; 4 EI; 406 acertos; 11 erros; 97,36% de aproveitamento; 7,19% de insegurança; 187 minutos líquidos (3h07)**.
- Plataforma ChatGPT: 12 atividades, 397 questões, 388 acertos, 9 erros e 177 minutos. Plataforma TEC: 9 atividades, 20 questões, 18 acertos, 2 erros e 10 minutos.
- Novos estudos efetivos em **11/11**: RCCN 16 (10 min, 28/28, Seguro, sem reforço), RCCN 17 (15 min, 28/30, Seguro, reforço pontual).
- Ambos possuem **D+1 breve em 12/11**, D+7 em 18/11, D+30 em 11/12. Em RCCN 17, a D+1 deve abranger pelo menos **3 questões inéditas sobre o art. 60 e 3 sobre o art. 61** (mínimo 6 questões especificamente direcionadas a esses dispositivos).
- Nova chave de importação idempotente v2 para incorporar o complemento sem duplicar o fechamento anterior nos navegadores que já importaram a versão v1. Testes: importação de 21 resultados, 15 estudos iniciais, geração dos ciclos e segunda execução sem duplicações.
- Redistribuição Semana 3 (12–13/11) preserva os tópicos A/Q concluídos, sem mover RCCN 16 ou 17: **quinta 9 A + 4 Q = 13 estudos novos; sexta 9 A + 5 Q = 14 estudos novos**. A divisão 9+9 dos Aprofundamentos conserva a sequência pedagógica; o Q adicional de sexta compensa a carga maior de revisões D+1 na quinta.
- **RFIA 5** permanece não concluído e programado para 12/11. As cinco Complementações TEC concluídas em 11/11 e suas revisões D+1 em 12/11 continuam preservadas.
- Código atualizado no commit `0f9071442836bf2711fcdddb1f41af2589bf228b`. Publicação no Netlify não verificada; commit no GitHub não comprova versão visível no domínio.

## 12/11/2026 — quadro de progresso por matéria

- Incluído em **Estudos → Visão geral** quadro de progresso por disciplina com cartões, barras percentuais, totais de tópicos, concluídos, pendentes e detalhamento por modalidade.
- A contagem usa **663 unidades únicas** do cadastro (321 Aprofundamentos, 109 Complementações TEC e 233 Questões TEC), agrupadas pela disciplina de referência (`subject`) de cada unidade. A Complementação não é mostrada como uma disciplina separada.
- Totais cadastrados: RICD 101, PL 36, RCCN 22, LP/LING 170, RFIA 54, CP 47, DC 40, DA 137, AP 17 e TI 39.
- A conclusão é apurada por tópico cadastrado (`planId`) efetivamente concluído e não reaberto; revisões D+1/D+7/D+30 não somam tópico ao progresso.
- Verificada a correspondência dos **109 códigos de Complementação TEC** à disciplina de referência no cadastro, sem IDs duplicados. Alguns cadernos possuem pré-requisitos encadeados ou interdisciplinares, mas a disciplina contabilizada continua sendo a indicada pelo próprio código do caderno.
- Alteração exclusiva da interface e do cálculo de indicadores; histórico de estudos, resultados e calendário de revisões preservados.
- Commit da mudança: `39a30938f7bb4c9a3d02bb7725e5f371ff7a0805`. A publicação no Netlify requer confirmação separada.

## 12/11/2026 — fechamento definitivo e transferência para 13/11

- Importação idempotente de **22 atividades concluídas** em 12/11: 10 ChatGPT e 12 TEC, incluindo 6 estudos iniciais, 1 complementação TEC e 15 revisões D+1.
- Métricas: **341 questões**, 294 acertos seguros, 32 acertos inseguros, 7 erros seguros, 8 erros inseguros; 326 acertos (95,60%), insegurança de 11,73% e 180 minutos líquidos.
- As unidades A/Q ainda não concluídas da Semana 3 passam integralmente para **13/11/2026**, preservando a ordem dos dois fluxos e o histórico das atividades realizadas em 12/11.
- Complementações TEC liberadas e pendentes com data em 12/11 transferidas para 13/11; revisões abertas previstas em 12/11 também transferidas, conservando a data original e sem reiniciar os ciclos subsequentes.
- Códigos conferidos com o cadastro de 663 unidades; nenhum ciclo realizado é reaberto. A importação preserva a identificação de segurança por questão e evita duplicidade de sessões existentes.
- Implementação: commit `8916172cbbb653da6e5e0fbc5ec770e6df2d4ea6`; script JavaScript e dados JSON validados sintaticamente.
- Publicação da versão no Netlify **não verificada**; somente a atualização da branch principal do GitHub foi confirmada.

## 13/11/2026 — fechamento e novo regime de metas flexíveis

- Importados de forma idempotente os **9 resultados concluídos de 13/11/2026**: 4 revisões D+1 de Aprofundamento, 2 revisões D+1 TEC e 3 estudos iniciais TEC, em 5 disciplinas.
- Totais conferidos: **153 questões, 130 acertos seguros, 19 acertos inseguros, 1 erro seguro, 3 erros inseguros, 149 acertos, 97,39% e 71 minutos líquidos**. Atividade DA 36 D+1 não realizada não acrescenta resultado, questão ou tempo.
- **DA 36:** preservado o estudo inicial TEC de 12/11; D+1 marcada não realizada por esgotamento das questões, com D+7/D+30 retiradas da programação. Histórico da ocorrência preservado; não criar novas revisões automaticamente.
- **12 aprofundamentos pendentes no encerramento de 13/11:** integrar ao restante da sequência A e distribuir entre as metas das semanas seguintes até 15/01/2027, sem concentrá-los artificialmente em 14–22/11. Reequilibrar também o saldo pendente de Questões TEC, em seu próprio fluxo.
- Nova regra de fechamento: quando uma semana acaba, conservar os estudos realmente realizados em seu período e recalcular a carga restante entre as semanas abertas, distribuindo por quotas equilibradas e preservando a ordem dos tópicos A e Q e as unidades CP ancoradas. O ideal histórico é independente das metas operacionais recalculadas.
- Evitar alterações no meio da semana: congelar em armazenamento local a alocação vigente por índice da semana encerrada e conjunto dos tópicos concluídos antes do fechamento. Recalcular no próximo fechamento semanal ou diante de alteração efetiva no histórico fechado.
- **Cronograma detalhado e agenda diária:** disponíveis somente para a primeira semana posterior à última encerrada. Depois do relatório definitivo de 13/11, o foco é **Semana 4 — 14 a 22/11**, com estudos novos em 15, 16, 17, 18, 19 e 22/11. Semanas futuras mostram apenas metas agregadas, a recalcular na virada semanal.
- Ajustados os indicadores de previsão operacional para usar cotas recalculadas; comparativos do ideal original permanecem separados. Preservadas datas efetivas dos estudos, histórico e revisões já concluídas.
- Validações: 9 registros e 153 questões conferidos contra cadastro; sintaxe dos 16 scripts e JSON da página verificada; teste isolado da redistribuição confirma unicidade, preservação de itens concluídos e estabilidade das metas durante uma semana ativa.
- Publicação efetiva no Netlify **não confirmada** apenas pela atualização do repositório.

## 13/11/2026 — correção do indicador Esperado no progresso

- O indicador **Esperado** (Aprofundamento e Questões TEC) foi corrigido para seguir o **ideal histórico original proporcional ao calendário**, usando `idealA` e `idealQ`, e não as cotas operacionais redistribuídas (`quotaA`/`quotaQ`) nem o número de tópicos efetivamente concluídos.
- O **Realizado** continua a refletir apenas os estudos concluídos, e a diferença apresentada é Realizado − Esperado (ideal). Complementações TEC seguem o critério próprio de liberação/programação, sem cotas fixas.
- Ajustadas as descrições do Quadro geral, indicadores de progresso e consolidação de modalidades para explicitar a distinção entre ideal histórico e metas semanais flexíveis.
- Planejamento detalhado da próxima semana, metas futuras, históricos e datas de revisões não foram alterados.
- Verificados os 16 blocos JavaScript/JSON da página, sem erros sintáticos.

## 14/11/2026 — Atualização dos limites de leitura nos comandos

- **Estudo inicial:** até **10 minutos de leitura nas Etapas 1 a 3 somadas**, referência de **1.800 palavras** a 180 palavras/minuto, no lugar de 15 minutos/2.700 palavras.
- **D+1:** até **5 minutos para as Etapas 3 e 4 somadas**. Teto nominal de 900 palavras a 180 palavras/minuto; RICD/RCCN mantêm a referência conservadora de 800 palavras.
- **D+7:** até **2,5 minutos para as Etapas 3 e 4 somadas**. Teto nominal de 450 palavras a 180 palavras/minuto; RICD/RCCN mantêm a referência conservadora de 400 palavras.
- Harmonizados **28 comandos** das seis disciplinas (RICD, RCCN, PL, CP, RFIA e LP/LING), incluindo os questionários de avaliação e as referências antigas de 30 minutos em CP/RFIA.
- Corrigida também a regra de estudo inicial inserida automaticamente no comando personalizado de Ciência Política.
- Mantidos os procedimentos de questões, ineditismo, correção seletiva e registros de resultado. O limite diz respeito à **leitura teórica**, não ao tempo líquido total da atividade. **D+30** permanece sem leitura teórica programada.
- Não foram alterados planejamento, histórico, resultados, PDFs, links ou dados de revisões; publicação no Netlify requer verificação independente.

## 15/11/2026 — RFIA: ampliação dos tetos de leitura

- Aplicado **somente a RFIA**, sem alterações aos comandos das demais matérias.
- **Estudo inicial (Etapas 1–3 somadas):** 10 → **20 minutos**, com teto nominal de **3.600 palavras** a 180 palavras/minuto.
- **Revisão D+1 (Etapas 3–4 somadas):** 5 → **10 minutos**, teto nominal de **1.800 palavras**.
- **Revisão D+7 (Etapas 3–4 somadas):** 2,5 → **5 minutos**, teto nominal de **900 palavras**.
- Harmonizados os questionários RFIA de avaliação do estudo inicial e da revisão com os novos limites.
- **Revisão D+30**, quantidade de questões, correções, histórico, planejamento, PDFs, links e cronograma preservados. Limites continuam se referindo à leitura, não ao tempo líquido total de estudo.
- Alteração confirmada no GitHub; publicação efetiva no Netlify não verificada nesta etapa.

## 15/11/2026 — Fechamento diário e redistribuição de 33 aprofundamentos

- **Relatório diário recebido:** 23 atividades executadas (6 ChatGPT e 17 TEC), 240 questões, 226 acertos, 14 erros, 32 respostas inseguras, 94,17% de aproveitamento e 81 minutos conhecidos. Importação **idempotente**, com validação das somas e vinculação aos tópicos do plano.
- **RICD 10 D+7:** execução material incluída provisoriamente na estatística do relatório, mas sem atribuição de data efetiva confirmada ou conclusão formal. A tentativa informa que 15/11 é **data de referência**, não data efetiva comprovada. Não se converte automaticamente em revisão realizada.
- **Complementos individuais confirmados fora do relatório diário:** RFIA 5 (40 questões, 35 acertos, 5 erros, 25 min), LP/LING 14 (40, 36, 4, 17 min) e CP 5 (42, 41, 1, 25 min). As três atividades ficam registradas separadamente, com identificação de origem e segurança de erros não informada (sem inventar ES/EI). O subtotal original do relatório, de 23 atividades e 240 questões, permanece documentado, sem confusão com os 3 complementos.
- **TEC LP/LING/TEC 1 — Artigo e LP/LING/TEC 2 — Substantivo:** revisão D+7 de 15/11 não realizada por falta de itens inéditos; futuras D+30 encerradas conforme a observação literal do usuário. Nenhuma questão, duração ou contato foi criado. Histórico anterior preservado.
- **RFIA 6, 7 e 8:** registrados como pendências de estudo inicial de 15/11, sem falsa conclusão ou questões respondidas.
- **Cronograma da Semana 4:** os **33 aprofundamentos pendentes** são distribuídos apenas entre segunda 16/11 (8), terça 17/11 (8), quarta 18/11 (8) e quinta 19/11 (9). Os tópicos RFIA ficam divididos de forma tão igual quanto possível, mantendo sua ordem interna; as outras disciplinas mantêm blocos consecutivos na sequência pedagógica integrada. As Questões TEC possuem planejamento próprio e não integram a contagem de 33 aprofundamentos.
- Caso a alocação semanal em cache não tenha exatamente 33 aprofundamentos livres, redistribuir o excesso ou complemento entre as semanas futuras, sem duplicar/omitir unidades e mantendo os vínculos de CP.
- Preservados os registros anteriores a 15/11, seus tempos, datas efetivas, revisões concluídas, cronograma D+1/D+7/D+30, links e PDFs.
- **Verificações:** 23 lançamentos oficiais e 3 complementares importados em teste isolado sem duplicação; 240 questões/226 acertos/81 min no subtotal oficial, 362 questões/338 acertos/148 min no conjunto com complementos. Revisão RICD 10 testada como não formalmente concluída; teste isolado da divisão 8/8/8/9 e unicidade de 554 unidades A/Q validado. Sintaxe do JavaScript conferida.
- Alteração concluída no código do GitHub. A publicação efetiva no Netlify permanece não verificada.


## 15/11/2026 — complemento auditado de RICD 10 (D+7)

- Incorporado o **relatório complementar individual de RICD 10 — Dos Líderes (arts. 9º a 11-A), revisão D+7**, no mesmo lançamento provisório de 15/11; não foram criadas atividades, tentativas ou tempos adicionais.
- Resultado preservado: **30 questões, 23 AS, 5 AI, 1 ES, 1 EI, 28 acertos, 2 erros, 93,33% de aproveitamento, 20,00% de insegurança, 13 minutos**. Q02 (erro seguro, art. 9º, caput), Q05 (erro inseguro, art. 9º, § 4º) e AI Q01/Q06/Q11/Q22/Q30 documentados; correções e leitura normativa integralmente declaradas.
- **Execução material integralmente confirmada**; **data efetiva não confirmada** e **situação formal não informada**, sem transformar automaticamente o relatório em revisão formalmente realizada.
- Domínio **Seguro**, retenção semelhante à D+1, recuperação fácil/autônoma, reforço **Pontual**. Conformidade **parcial**: Etapas 3–4 acima das 400 palavras de referência, sem comprovação de extrapolação do tempo de leitura.
- **D+30 em 08/12/2026, Normal, sem leitura teórica nem quadro geral**. Mínimo de 3 questões inéditas para art. 9º, caput (Q02), e 3 para art. 9º, § 4º (Q05), mais reforços complementares dos dispositivos das cinco inseguranças. Sem D+60 ou revisão extraordinária automática.
- Totais do relatório de 15/11 não alterados: 23 atividades, 240 questões, 226 acertos e 81 minutos (RICD 10 provisório). Subtotal com data efetiva confirmada, sem RICD 10: 22 atividades, 210 questões, 198 acertos e 68 minutos. São visões alternativas, não cumulativas.
- Inclusão idempotente por nova chave local: atualiza somente metadados da tentativa e revisões já vinculadas. Confirmações manuais de conclusão pré-existentes são preservadas. Painel de desempenho exibe a ressalva e os detalhes auditados.
- Validação: scripts e blocos JSON compilados/analisados sem erro; conferidas as somas originais da importação e a integridade dos sete itens classificados. Publicação no Netlify não confirmada por esta alteração.


## 15/11/2026 — conclusão formal da D+7 de RICD 10

- Confirmação expressa do estudante de que a revisão D+7 de RICD 10 — Dos Líderes ocorreu em **15/11/2026**. Revisão marcada **Realizada** no cronograma do dia e **Concluída** no histórico.
- Data efetiva, confirmação de conclusão e situação formal atualizadas no mesmo registro; eliminada a ressalva anteriormente válida sobre data e status desconhecidos.
- **Sem acréscimo aos totais:** RICD 10 permanece com 30 questões, 28 acertos, 2 erros e 13 minutos. Fechamento principal de 15/11: **23 atividades, 240 questões, 226 acertos, 14 erros e 81 minutos conhecidos**.
- Migração idempotente v2 aplicada sobre a importação original e o complemento individual. Reutiliza a tentativa e a revisão programada de 15/11; não cria bateria nova.
- D+30 preservada em 08/12/2026, profundidade Normal, sem leitura teórica; reforços de três questões inéditas para art. 9º, caput, e três para art. 9º, § 4º.
- Indicadores e aviso de pendência atualizados no painel de desempenho. Publicação no Netlify não verificada por este commit.


## 16/11/2026 — correção do tempo líquido do dia 15/11

- Confirmação expressa do estudante: **15/11/2026 teve apenas 1h21min (81 minutos) de tempo líquido total**, não 2h28min (148 minutos).
- Preservadas as durações individuais de RFIA 5 (25 min), LP/LING 14 (17 min) e CP 5 (25 min) como dados documentais complementares, mas os 67 minutos não devem ser somados novamente ao total diário de 81 minutos.
- Ajustado o cálculo do tempo líquido diário, do tempo acumulado, da média e do cronograma do dia: quando o relatório oficial de 23 atividades está carregado, adota-se seu total confirmado de 81 minutos, sem contabilizar os complementos novamente.
- Mantidas as 23 atividades oficiais, 240 questões e 226 acertos do fechamento principal; nenhum dado individual, revisão ou data efetiva foi removido. D+7 de RICD 10 segue concluída em 15/11.
- Validada a sintaxe de todos os scripts e a conservação de 23 lançamentos oficiais e três complementos. Publicação no Netlify não verificada.


## 16/11/2026 — fechamento e redistribuição dos estudos de 17 a 20/11

- Recebido o **relatório diário fechado de 16/11**: 29 atividades executadas (8 ChatGPT, 21 TEC), 475 questões, 438 acertos, 37 erros, 409 AS, 29 AI, 10 ES, 27 EI e **200 minutos líquidos (3h20)**. Importação por identidade de sessão, preservando registros anteriores. LP/LING 14 D+1 permanece com conclusão material declarada, mas **data efetiva não confirmada**.
- Estudos iniciais concluídos em 16/11: **PL 19, PL 20, PL 21, LP/LING 15, LP/LING 16** (A); **DA 41, DA 42, DA 43, TI 12** (Q); complementações **LP/LING/TEC 12 e CP/TEC 1** (C). Os demais 18 lançamentos são revisões e não consomem a meta de estudos iniciais.
- **TI 11 (Q-065) e RCCN/TEC 3 (C-RCCN-003):** D+1 TEC não realizada por esgotamento de questões; D+7 e D+30 encerradas, mantendo os primeiros contatos históricos.
- Categorias AS/AI/ES/EI registradas por disciplina/plataforma conforme o relatório; por sessão individual, apenas quantidade de questões e acertos/erros foi fornecida. A apresentação agregada reconcilia a segurança somente quando todos os registros do grupo estão presentes, sem inventar classificações por questão.
- **Semana 4 (14–22/11):** todas as unidades A/Q **ainda não realizadas** da meta operacional corrente, incluindo as que estavam pendentes em 16/11, foram redistribuídas entre **terça 17, quarta 18, quinta 19 e sexta 20/11**. Cotas de quantidade total são equitativas (diferença máxima de uma unidade), e cada fluxo A e Q segue por **blocos consecutivos da sequência original integrada**, sem alternância arbitrária de disciplinas.
- Os estudos já concluídos permanecem nas **datas efetivas**. Nenhum A/Q é introduzido ou retirado das metas de semanas futuras, nem se duplica ou omite unidade. Revisões D+1/D+7/D+30 mantêm sua programação normativa. A sexta-feira **20/11** é exceção expressa à regra regular de sexta apenas para revisões, limitada a esta semana.
- Complementações TEC **já liberadas** com programação até 20/11 são distribuídas para 17–20/11 respeitando a liberação prévia e a ordem integrada, sem antecipar cadernos bloqueados. Novas complementações seguem sendo liberadas pelos seus gatilhos pedagógicos.
- Verificação pré-publicação: totais 29/475/438/200, categorias 409/29/10/27, idempotência por sessão, código JavaScript e JSON sintaticamente válidos. Publicação no Netlify exige verificação separada.


## 16/11/2026 — remoção visual do painel complementar RICD 10 em Desempenho

- Removido exclusivamente o painel **“RICD 10 — relatório complementar D+7”** de **Desempenho → Quadro geral**, incluindo a tabela individual de erros/inseguranças e suas notas de auditoria expostas no painel.
- Preservados o relatório complementar estruturado e os metadados históricos no registro da tentativa, a revisão D+7 concluída em 15/11, o agendamento D+30 de 08/12, os 30 itens/13 minutos da atividade e os totais de desempenho. O aviso geral de fechamento de 15/11 e os indicadores agregados continuam disponíveis.
- Sem alteração na programação da Semana 4, cronogramas, PDFs ou outros resultados. Código JavaScript validado sintaticamente; publicação no Netlify a verificar separadamente.


## 17/11/2026 — confirmação de LP/LING 14 D+1 em 16/11

- Por confirmação expressa do estudante em 17/11, a revisão **D+1 de LP/LING 14 — Emprego do hífen** foi **realizada em 16/11/2026**. Eliminada a pendência de data efetiva do fechamento de 16/11.
- O cronograma de **16/11** marca a revisão como **Realizada**, com `doneDate=2026-11-16`, `completionConfirmed=true` e `effectiveDateConfirmed=true`, inclusive em navegadores que já importaram o registro provisório.
- Dados preexistentes preservados: **32 questões, 28 acertos, 4 erros e 13 minutos**, sem criar ou contar novamente tentativa ou tempo. O fechamento de 16/11 permanece com **29 atividades, 475 questões e 200 minutos**.
- Migração local idempotente v2 e correção do relatório de origem para futuras instalações; D+7 e D+30 já programadas não são modificadas.
- Scripts JavaScript e blocos JSON validados sintaticamente; versão Netlify sujeita a verificação separada.

## Política de manutenção

Preservar estudos, revisões, tentativas, métricas, arquivos, links e calendários. Nunca transformar uma remoção visual em exclusão de histórico, salvo orientação expressa.
