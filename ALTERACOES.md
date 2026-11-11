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

## Política de manutenção

Preservar estudos, revisões, tentativas, métricas, arquivos, links e calendários. Nunca transformar uma remoção visual em exclusão de histórico, salvo orientação expressa.
