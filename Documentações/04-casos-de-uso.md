# 4. Casos de Uso do Sistema

**Versão:** 2.0 — revisão de 30/10/2026 · **Status:** Concluído (Jira: SCRUM-34)
**Ator único:** Usuário (sem autenticação).

| Caso de uso | Objetivo | Histórias | Requisitos | Regras | Status |
|---|---|---|---|---|---|
| CDU01 | Cadastrar despesa | US01–US06, US20 | RF01–RF10 | RN01–RN11, RN23 | Concluído |
| CDU02 | Consultar despesas | US07, US08 | RF11, RF12, RF24 | RN11, RN24 | Concluído |
| CDU03 | Filtrar despesas | US09–US14 | RF13–RF19, RF25 | RN12–RN17, RN22 | Concluído |
| CDU04 | Excluir despesa | US15–US18 | RF20–RF23 | RN18–RN21, RN23 | Concluído |

> **Nota de verificação:** os fluxos principais foram conferidos no código original. Os fluxos de exceção marcados com (\*) constam como concluídos no Jira e dependem do código atualizado para confirmação.

---

## CDU01 — Cadastrar despesa

**Objetivo:** registrar uma nova despesa.
**Pré-condições:** tela de cadastro aberta; localStorage disponível.

**Fluxo principal**

1. O usuário informa ano, mês, dia, tipo, descrição e valor.
2. Clica no botão (+).
3. O sistema valida os dados.
4. O sistema gera o id e grava no localStorage.
5. O sistema exibe a mensagem de sucesso.
6. O sistema limpa o formulário.

**Fluxos alternativos**

- A1. O usuário cadastra outra despesa em seguida (volta ao passo 1).

**Exceções**

- E1. Campo obrigatório vazio → modal de erro; nada é gravado; os dados digitados são mantidos.
- E2. (\*) Data inexistente, tipo inválido, descrição só com espaços ou valor não positivo → modal de erro.
- E3. (\*) Falha de gravação → mensagem de erro clara, sem aviso de sucesso.

**Pós-condições:** despesa gravada e disponível na consulta; registros anteriores intactos.

---

## CDU02 — Consultar despesas

**Objetivo:** visualizar as despesas cadastradas.
**Pré-condições:** tela de consulta aberta.

**Fluxo principal**

1. O sistema recupera os registros do localStorage.
2. O sistema exibe a tabela com data, tipo, descrição e valor, com o tipo pelo nome.

**Fluxos alternativos**

- A1. Nenhuma despesa cadastrada → tabela vazia com mensagem (\*).

**Exceções**

- E1. (\*) Registro corrompido no armazenamento → os demais continuam listados.
- E2. (\*) Descrição com HTML ou script → exibida como texto, sem executar.

**Pós-condições:** nenhuma alteração nos dados.

---

## CDU03 — Filtrar despesas

**Objetivo:** localizar despesas específicas.
**Pré-condições:** tela de consulta aberta.

**Fluxo principal**

1. O usuário preenche um ou mais filtros: ano, mês, dia, tipo, descrição, valor.
2. Clica na lupa.
3. O sistema aplica todos os filtros preenchidos em conjunto.
4. O sistema exibe somente os registros correspondentes.

**Fluxos alternativos**

- A1. Nenhum filtro preenchido → todos os registros são exibidos.
- A2. O usuário altera os filtros e pesquisa de novo.

**Exceções**

- E1. (\*) Nenhum registro corresponde → tabela vazia com a mensagem "nenhuma despesa encontrada".
- E2. (\*) Dia "2" e "02", ou descrição parcial em maiúsculas ou minúsculas, devem encontrar o mesmo registro.

**Pós-condições:** nenhuma alteração nos dados.

**Exemplo:** com as despesas abaixo, os filtros Ano 2026 + Mês Novembro + Tipo Educação retornam somente "Finados".

| Data | Categoria | Descrição | Valor |
|---|---|---|---|
| 02/11/2026 | Educação | Finados | R$ 80 |
| 05/11/2026 | Alimentação | Mercado | R$ 150 |
| 10/12/2026 | Educação | Curso | R$ 200 |
| 15/11/2026 | Transporte | Combustível | R$ 100 |

---

## CDU04 — Excluir despesa

**Objetivo:** remover uma despesa.
**Pré-condições:** existe ao menos uma despesa listada.

**Fluxo principal**

1. O usuário clica na lixeira da linha.
2. O sistema exibe "Quer mesmo excluir esse item?".
3. O usuário clica em "Sim".
4. O sistema remove somente aquele registro.
5. O sistema atualiza a listagem.

**Fluxos alternativos**

- A1. O usuário clica em "Não" ou fecha o modal → nada é removido.

**Exceções**

- E1. (\*) Falha ao acessar o armazenamento → mensagem de erro clara.

**Pós-condições:** despesa removida; demais registros preservados; os ids não são reaproveitados.

---

## Acessibilidade em todos os casos de uso (EP04)

Mensagens, estados e ações de CDU01 a CDU04 não dependem apenas de cor: usam texto, ícone ou forma, com contraste mínimo de 4,5:1 (RF26–RF28, RNF13–RNF14, RN25–RN28). Status no Jira: **Concluído**; verificação no código pendente. Detalhes em [Acessibilidade para Daltonismo](08-acessibilidade-daltonismo.md).
