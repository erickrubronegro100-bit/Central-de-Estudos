# Sincronização automática — Central de Estudos

## Estado da integração

O site está preparado para ler os lançamentos da planilha Google Sheets:

- Planilha: https://docs.google.com/spreadsheets/d/1kUDOgFBoYrtLISu6v1bxhVNCa4BmGeTf4OU4GeMJt5M/edit
- Aba **Atividades**: fonte de verdade para os resultados executados;
- Aba **Fechamentos**: síntese do dia, com fórmulas que somam as atividades;
- Aba **Revisoes**: programações documentadas das próximas revisões;
- Aba **LEIA-ME**: convenções e cuidados para registrar novos dados.

A página consulta as abas **Atividades** e **Revisoes** ao ser aberta e a cada cinco minutos, usando o mecanismo de leitura pública do Google Sheets. Se receber dados novos ou alterados, atualiza o histórico local e recarrega a página automaticamente. **Não é necessário fazer deploy no Netlify quando os dados da planilha mudam.**

## Uma etapa manual necessária para ativar a leitura

O compartilhamento da planilha não foi alterado automaticamente, por segurança. Para ativar:

1. Abra a planilha acima em sua conta Google.
2. Clique em **Compartilhar**, depois em **Acesso geral**.
3. Se quiser que este site público possa ler a planilha sem autenticação, selecione **Qualquer pessoa com o link** e a permissão **Leitor**.
4. Clique em **Concluído** e abra a página do Netlify.

**Atenção à privacidade:** esta ação torna a planilha visível a qualquer pessoa que tenha o link e pode expor seu conteúdo. Nunca insira dados pessoais ou sensíveis nesse arquivo. Se desejar manter a planilha privada, será necessário acrescentar um backend autenticado ou um endpoint que publique apenas campos não sensíveis.

## Como alimentar com relatórios do ChatGPT

Ao concluir um relatório diário, peça:

> Registre o fechamento de DD/MM/AAAA na planilha “Central de Estudos — Registros de fechamentos diários”, preenchendo as atividades individuais e as próximas revisões. Confira os totais e atualize linhas existentes em vez de duplicá-las.

O lançamento deve ser feito na planilha conectada pelo ChatGPT quando solicitado, não apenas descrito na conversa. Em cada atividade, preencha as colunas `id`, `data`, `codigo`, `disciplina`, `topico`, `etapa`, `fonte`, `situacao`, `minutos`, `as`, `ai`, `es`, `ei`, `nc`, `dominio`, `reforco`, `observacoes`, `data_confirmada` e `origem_relatorio`.

Convenção de identificador: `AAAA-MM-DD|CODIGO|ETAPA|FONTE`. Exemplos:
- `2026-11-17|PL 19|D+1|ChatGPT`
- `2026-11-17|RICD 12|D+7|ChatGPT`

Apenas atividades efetivamente concluídas devem estar como `Concluída`. Revisões futuras são registradas como `Programada` em `Revisoes`. Não somar as comparações históricas aos resultados do dia. As notas proporcionais são calculadas a partir do aproveitamento bruto e não equivalem à pontuação líquida CEBRASPE.

## Auditoria e limites

- A atualização preserva o layout do site e os registros locais preexistentes, unificando por data, código, etapa e fonte.
- Se uma atividade já existir, os quantitativos da planilha prevalecem sem criar nova atividade.
- Registros manuais antigos do site permanecem no armazenamento local. Esta integração **não envia** automaticamente alterações feitas no navegador de volta para o Google Sheets.
- O site começa a sincronizar quando a planilha estiver acessível para leitura; enquanto permanecer privada, o carregamento segue normalmente com o histórico local.
- Registros com `nc > 0` são preservados como observação de itens não classificados, mas os painéis existentes ainda não contabilizam NC como uma categoria própria.
- Alterações estruturais do site continuam exigindo deploy; apenas os novos dados de estudo deixam de exigir publicação.
- Se houver divergência com um fechamento consolidado, confira as datas, as 4 categorias AS/AI/ES/EI e as linhas da aba Atividades.
