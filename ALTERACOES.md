# Registro de alterações — Central de Estudos

Este arquivo registra as solicitações de organização e apresentação do site. Alterações de interface não eliminam dados históricos dos estudos.

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

## Política de manutenção

Preservar estudos, revisões, tentativas, métricas, arquivos, links e calendários. Nunca transformar uma remoção visual em exclusão de histórico, salvo orientação expressa.
