# 2. Requisitos do Aplicativo de Orçamento Pessoal

Referência dos **requisitos funcionais (RF)**, **requisitos não funcionais (RNF)** e **regras de negócio (RN)**, com critério de aceitação verificável e status de cada item. Cumpre também os itens "Requisitos Funcionais e Não Funcionais" e "Regras de Negócio" da organização da documentação.

**Versão:** 2.0 — revisão de 30/10/2026 (Jira: SCRUM-31)
**Épicos relacionados:** EP01 (SCRUM-7), EP02 (SCRUM-8), EP03 (SCRUM-9), EP04 (SCRUM-38)
**Complemento:** [Acessibilidade para daltonismo](08-acessibilidade-daltonismo.md)

## Como ler os status

| Campo | Significado |
|---|---|
| **Status** | Situação da história ou bug correspondente no Jira, marcada pela equipe. Todos estão **Concluído** em 30/10/2026. |
| **Evidência — Verificado** | Existe no código analisado (`app.js`, `index.html`, `consulta.html`). |
| **Evidência — Reportado** | A equipe concluiu o item no Jira, mas a correção **não aparece** nos arquivos analisados (versão original). Precisa do código atualizado para confirmação. |
| **Evidência — Não medido** | Depende de teste ou medição ainda não registrados. |

> **Nota de verificação:** ao conferir os arquivos atualizados, os itens "Reportado" passam a "Verificado".

## Resumo

| Tipo | Total | Concluídos no Jira | Verificados no código | Reportados | Não medidos |
|---|---|---|---|---|---|
| Requisitos funcionais | 28 | 28 | 20 | 8 | 0 |
| Requisitos não funcionais | 15 | 15 | 4 | 7 | 4 |
| Regras de negócio | 28 | 28 | 17 | 11 | 0 |

## Requisitos funcionais

| ID | Requisito | Critério de aceitação | Status | Evidência | História |
|---|---|---|---|---|---|
| RF01 | Exibir tela de cadastro | `index.html` mostra Ano, Mês, Dia, Tipo, Descrição, Valor e botão (+) | Concluído | Verificado | US01 |
| RF02 | Informar dados da despesa | Os 6 campos podem ser preenchidos | Concluído | Verificado | US02 |
| RF03 | Validar campos obrigatórios | Com campo vazio, nada é gravado e o modal de erro aparece | Concluído | Verificado | US03 |
| RF04 | Validar os dados informados | Data inexistente, tipo inválido e valor não numérico ou ≤ 0 são rejeitados | Concluído | Reportado | US03 |
| RF05 | Cadastrar despesa | Dados válidos geram um registro | Concluído | Verificado | US04 |
| RF06 | Armazenar no localStorage | Registro existe no localStorage após cadastrar | Concluído | Verificado | US04 |
| RF07 | Gerar identificador único | Dois cadastros nunca têm o mesmo id | Concluído | Verificado | US04 |
| RF08 | Exibir confirmação de cadastro | Modal de sucesso após gravar | Concluído | Verificado | US05 |
| RF09 | Exibir mensagem de erro | Modal de erro para dados inválidos e para falha de gravação | Concluído | Verificado (campos vazios); Reportado (demais casos) | US05, US20 |
| RF10 | Limpar formulário após cadastro | Campos vazios após sucesso | Concluído | Verificado | US06 |
| RF11 | Exibir despesas cadastradas | Tabela com Data, Tipo, Descrição, Valor | Concluído | Verificado | US07 |
| RF12 | Recuperar despesas do localStorage | Ao abrir a consulta, todos os registros são listados | Concluído | Verificado | US08 |
| RF13 | Filtrar por ano | Só despesas do ano escolhido | Concluído | Verificado | US09 |
| RF14 | Filtrar por mês | Só despesas do mês escolhido | Concluído | Verificado | US09 |
| RF15 | Filtrar por dia | Só despesas do dia informado; "2" equivale a "02" | Concluído | Reportado (bug SCRUM-49) | US09 |
| RF16 | Filtrar por tipo | Só despesas da categoria escolhida | Concluído | Verificado | US10 |
| RF17 | Filtrar por descrição | Busca parcial, sem diferenciar maiúsculas | Concluído | Reportado (bug SCRUM-46) | US11 |
| RF18 | Filtrar por valor | Retorna despesas com o valor informado | Concluído | Verificado (comparação textual) | US12 |
| RF19 | Combinar filtros | Filtros preenchidos aplicados juntos (E) | Concluído | Verificado | US13 |
| RF20 | Excluir despesa | Registro some do localStorage | Concluído | Verificado | US15, US18 |
| RF21 | Confirmar exclusão | Modal pergunta antes; "Sim" remove | Concluído | Verificado | US16 |
| RF22 | Cancelar exclusão | "Não" mantém o registro | Concluído | Verificado | US16 |
| RF23 | Atualizar listagem | Registro removido não aparece mais | Concluído | Verificado (via reload) | US17 |
| RF24 | Navegar entre telas | Menu alterna Cadastro e Consulta | Concluído | Verificado | US01, US07 |
| RF25 | Informar ausência de resultados | Mensagem quando a consulta não retorna registros | Concluído | Reportado (bug SCRUM-48) | US14 |
| RF26 | Identificar mensagem por texto e ícone, além da cor | Modais de sucesso, erro e aviso distinguíveis em escala de cinza | Concluído | Reportado | US22 |
| RF27 | Distinguir confirmar e cancelar sem depender da cor | "Sim" e "Não" distinguíveis em escala de cinza | Concluído | Reportado | US22 |
| RF28 | Rotular ações que só têm ícone | Botões (+), lupa e lixeira com rótulo acessível | Concluído | Reportado | US25 |

## Requisitos não funcionais

| ID | Requisito | Critério de aceitação | Status | Evidência | História |
|---|---|---|---|---|---|
| RNF01 | Usabilidade | Usuário identifica campos e botões sem instruções técnicas | Concluído | Não medido | US01, US23 |
| RNF02 | Responsividade | Telas utilizáveis em desktop, tablet e celular | Concluído | Reportado (bug SCRUM-50, viewport) | US19 |
| RNF03 | Persistência local | Despesa continua após recarregar a página | Concluído | Verificado | US04, US08 |
| RNF04 | Desempenho | Operações comuns em até 2 s (meta, não medida) | Concluído | Não medido | US21 |
| RNF05 | Compatibilidade | Funciona em Chrome, Edge e Firefox | Concluído | Não medido | US21 |
| RNF06 | Integridade dos dados | Dados recuperados idênticos aos cadastrados | Concluído | Não medido | US04, US18 |
| RNF07 | Segurança de entrada e exibição | Descrição com HTML ou script é exibida como texto | Concluído | Reportado (bug SCRUM-47) | US20 |
| RNF08 | Tratamento de erros | Falha de gravação gera mensagem clara, sem sucesso falso | Concluído | Reportado | US20 |
| RNF09 | Manutenibilidade | Cadastro, pesquisa, validação e exclusão em funções ou classes identificáveis | Concluído | Verificado (classes `Despesa` e `Bd`) | US24 |
| RNF10 | Acessibilidade | Rótulos, navegação por teclado e botões identificáveis | Concluído | Reportado | US25 |
| RNF11 | Independência de backend | Cadastro e consulta funcionam sem servidor | Concluído | Verificado | US04 |
| RNF12 | Privacidade | Despesas não são enviadas a servidores externos | Concluído | Verificado (o código não transmite dados; bibliotecas vêm de CDN) | US04 |
| RNF13 | Acessibilidade para daltonismo | Interface utilizável em protanopia, deuteranopia, tritanopia e acromatopsia | Concluído | Reportado | US22–US26 |
| RNF14 | Contraste mínimo WCAG 2.1 AA | Texto normal ≥ 4,5:1; texto grande e componentes ≥ 3:1 | Concluído | Reportado (bug SCRUM-51) | US23 |
| RNF15 | Verificabilidade da acessibilidade | Procedimento repetível de teste com simulador e evidências | Concluído | Reportado | US26 |

## Regras de negócio

| ID | Regra | Critério de aceitação | Status | Evidência |
|---|---|---|---|---|
| RN01 | Campos obrigatórios | Só grava com os 6 campos preenchidos | Concluído | Verificado |
| RN02 | Data válida | 31/02 é rejeitado | Concluído | Reportado (bug SCRUM-45) |
| RN03 | Ano válido | Inteiro dentro do intervalo permitido | Concluído | Verificado (lista do formulário: 2026) |
| RN04 | Mês válido | Somente 01 a 12 | Concluído | Verificado (lista do formulário) |
| RN05 | Dia válido | Inteiro existente no mês e ano | Concluído | Reportado (bug SCRUM-45) |
| RN06 | Categoria permitida | Alimentação, Educação, Lazer, Saúde ou Transporte | Concluído | Verificado (lista do formulário) |
| RN07 | Descrição válida | Texto só com espaços é rejeitado | Concluído | Reportado |
| RN08 | Valor positivo | Valor numérico maior que zero | Concluído | Reportado (bug SCRUM-45) |
| RN09 | Precisão monetária | Até 2 casas decimais | Concluído | Reportado |
| RN10 | Identificação única | Cada despesa tem id próprio | Concluído | Verificado |
| RN11 | Persistência | Despesa permanece até ser removida ou o navegador limpar os dados | Concluído | Verificado |
| RN12 | Filtros opcionais | Filtro vazio é ignorado | Concluído | Verificado |
| RN13 | Combinação de filtros | Resultado atende a todos os filtros preenchidos | Concluído | Verificado |
| RN14 | Correspondência por data | Ano, mês e dia comparam os componentes da data | Concluído | Verificado (comparação textual) |
| RN15 | Correspondência por categoria | Somente a categoria selecionada | Concluído | Verificado |
| RN16 | Pesquisa por descrição | Texto parcial, sem diferenciar maiúsculas | Concluído | Reportado (bug SCRUM-46) |
| RN17 | Correspondência por valor | Compara valor informado e registrado | Concluído | Verificado (comparação textual) |
| RN18 | Exclusão mediante confirmação | Nada é excluído sem clicar em "Sim" | Concluído | Verificado |
| RN19 | Cancelamento da exclusão | "Não" mantém o registro | Concluído | Verificado |
| RN20 | Exclusão individual | Só o id selecionado é removido | Concluído | Verificado |
| RN21 | Atualização da consulta | Registro removido não aparece na listagem | Concluído | Verificado |
| RN22 | Ausência de resultados | Mensagem "nenhuma despesa encontrada" | Concluído | Reportado (bug SCRUM-48) |
| RN23 | Preservação de registros | Novo cadastro não sobrescreve os anteriores | Concluído | Verificado |
| RN24 | Ausência de duplicação visual | Cada registro aparece uma vez | Concluído | Verificado |
| RN25 | A cor nunca é o único meio de informação | Toda mensagem, estado ou ação tem também texto, ícone ou forma | Concluído | Reportado |
| RN26 | Contraste mínimo obrigatório | Nenhum par texto/fundo abaixo do mínimo do RNF14 | Concluído | Reportado (bug SCRUM-51) |
| RN27 | Pares de cor proibidos como único diferenciador | Verde × vermelho não é o único recurso de distinção | Concluído | Reportado |
| RN28 | Consistência dos indicadores visuais | Mesma cor, ícone e texto significam o mesmo em todas as telas | Concluído | Reportado |

## Categorias permitidas

| Código | Categoria |
|---|---|
| 1 | Alimentação |
| 2 | Educação |
| 3 | Lazer |
| 4 | Saúde |
| 5 | Transporte |

## Pendências para encerrar a verificação

1. Conferir o `app.js`, o `index.html` e o `consulta.html` atualizados para converter os itens "Reportado" em "Verificado".
2. Registrar os resultados do [Plano de Testes](05-plano-de-testes.md) com evidências, o que cobre os itens "Não medido".
