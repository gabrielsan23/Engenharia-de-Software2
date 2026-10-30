# 5. Plano de Testes Funcionais

Plano de testes funcionais manuais. Cobre cadastro, validação, persistência, consulta, filtros, exclusão, responsividade, tratamento de erros e **acessibilidade para daltonismo**.

**Versão:** 2.0 — revisão de 30/10/2026 (Jira: SCRUM-35)
**Status do documento:** Concluído (plano escrito e revisado)
**Histórias de execução:** US21 (SCRUM-30) e US26 (SCRUM-43)

> **Importante — resultados:** nenhum resultado de execução foi registrado com evidência até esta revisão. Por isso todos os casos constam como **Aguardando evidência**, e nenhum foi marcado como Aprovado. Para fechar, registre o resultado de cada caso na seção 6, com captura de tela ou descrição do obtido.

## 1. Ambiente e massa de dados

**Navegadores:** Chrome, Edge e Firefox atuais.
**Estado inicial:** localStorage vazio (limpar dados do site), salvo indicação.

**Massa de referência (CT11 a CT15):**

| Data | Categoria | Descrição | Valor |
|---|---|---|---|
| 02/11/2026 | Educação | Finados | 80 |
| 05/11/2026 | Alimentação | Mercado | 150 |
| 10/12/2026 | Educação | Curso | 200 |
| 15/11/2026 | Transporte | Combustível | 100 |

## 2. Casos de teste funcionais

| ID | Objetivo | Pré-condições | Passos | Resultado esperado | Requisito | História | Situação |
|---|---|---|---|---|---|---|---|
| CT01 | Cadastro válido | Tela de cadastro; storage vazio | Preencher 2026 / Novembro / 02 / Educação / "Finados" / 80 e clicar em (+) | Modal de sucesso; campos limpos; despesa na consulta | RF05, RF08, RF10 | US02, US04, US05, US06 | Aguardando evidência |
| CT02 | Campos obrigatórios vazios | Tela de cadastro | Deixar um campo vazio por vez (6 execuções) e clicar em (+) | Modal de erro; nada gravado; dados digitados mantidos | RF03, RF09, RN01 | US03, US05 | Aguardando evidência |
| CT03 | Data inválida | Tela de cadastro | Cadastrar 31/02/2026; dia "abc"; dia "0" | Cadastro rejeitado com erro | RF04, RN02, RN05 | US03 (bug SCRUM-45) | Aguardando evidência |
| CT04 | Valor inválido | Tela de cadastro | Cadastrar valor "abc", "0" e "-10" | Cadastro rejeitado com erro | RF04, RN08 | US03 (bug SCRUM-45) | Aguardando evidência |
| CT05 | Persistência no localStorage | CT01 concluído | DevTools > Application > Local Storage; recarregar a página | Registro JSON com id; permanece após recarregar | RF06, RF07, RNF03 | US04 | Aguardando evidência |
| CT06 | Recuperação dos registros | 3 ou mais despesas | Abrir a consulta | Todas listadas, uma vez cada, com tipo pelo nome | RF11, RF12, RN24 | US07, US08 | Aguardando evidência |
| CT07 | Filtro por ano | Massa de referência | Filtrar Ano 2026 | Todos os registros de 2026 | RF13 | US09 | Aguardando evidência |
| CT08 | Filtro por mês | Massa de referência | Filtrar Mês Novembro | Somente os 3 de novembro | RF14 | US09 | Aguardando evidência |
| CT09 | Filtro por dia | Massa de referência | Filtrar Dia "2" e depois "02" | "Finados" nas duas formas | RF15, RN14 | US09 (bug SCRUM-49) | Aguardando evidência |
| CT10 | Filtro por categoria | Massa de referência | Filtrar Tipo Educação | Somente "Finados" e "Curso" | RF16, RN15 | US10 | Aguardando evidência |
| CT11 | Pesquisa por descrição | Massa de referência | Pesquisar "Mercado", "mercado" e "merc" | Encontra "Mercado" nos três casos | RF17, RN16 | US11 (bug SCRUM-46) | Aguardando evidência |
| CT12 | Filtro por valor | Massa de referência | Filtrar Valor 80 | Somente "Finados" | RF18, RN17 | US12 | Aguardando evidência |
| CT13 | Combinação de filtros | Massa de referência | Ano 2026 + Mês Novembro + Tipo Educação | Somente "Finados" (02/11/2026) | RF19, RN13 | US13 | Aguardando evidência |
| CT14 | Consulta sem resultados | Massa de referência | Filtrar Descrição "inexistente" | Tabela vazia com mensagem de nenhum resultado | RF25, RN22 | US14 (bug SCRUM-48) | Aguardando evidência |
| CT15 | Confirmação de exclusão | Massa de referência | Lixeira de "Mercado" > "Sim"; recarregar | Removido da tabela e do localStorage; não volta | RF20, RF21, RF23, RN18, RN21 | US15, US16, US17 | Aguardando evidência |
| CT16 | Cancelamento de exclusão | Massa de referência | Lixeira > "Não"; repetir fechando no "x" | Nada removido | RF22, RN19 | US16 | Aguardando evidência |
| CT17 | Preservação dos demais registros | Massa de referência | Excluir um registro; cadastrar um novo | Demais intactos; novo id não reaproveita o excluído | RN20, RN23, RNF06 | US18 | Aguardando evidência |
| CT18 | Responsividade | Duas telas | Abrir em ~1280, ~768 e ~375 px (DevTools) | Campos, tabela e menu utilizáveis; sem rolagem horizontal da página | RNF02, RNF10 | US19 (bug SCRUM-50) | Aguardando evidência |
| CT19 | Tratamento de erros | Telas de cadastro e consulta | (a) descrição `<b>teste</b>` e `<img src=x onerror=alert(1)>`; (b) editar um valor do storage para JSON inválido; (c) simular falha de gravação | (a) texto, sem executar; (b) listagem segue funcionando; (c) erro claro, sem sucesso falso | RNF07, RNF08, RF09 | US20 (bug SCRUM-47) | Aguardando evidência |

## 3. Casos de teste de acessibilidade para daltonismo

Ferramenta: Chrome DevTools > Rendering > Emulate vision deficiencies (protanopia, deuteranopia, tritanopia, acromatopsia).

| ID | Objetivo | Passos | Resultado esperado | Requisito | História | Situação |
|---|---|---|---|---|---|---|
| CT20 | Modais em simuladores | Disparar sucesso, erro e exclusão; ativar cada simulação | Os três modais distinguíveis por texto e ícone | RF26, RNF13 | US22, US26 | Aguardando evidência |
| CT21 | "Sim" e "Não" em escala de cinza | Abrir o modal de exclusão com acromatopsia | Botões distinguíveis sem a cor | RF27, RN27 | US22 | Aguardando evidência |
| CT22 | Contraste | Medir pares texto/fundo (cabeçalho do modal de aviso, botões, placeholders) | 4,5:1 para texto; 3:1 para componentes | RNF14, RN26 | US23 (bug SCRUM-51) | Aguardando evidência |
| CT23 | Paleta segura | Revisar a paleta com os três tipos de daltonismo | Nenhum par verde × vermelho como único diferenciador | RN27, RN28 | US24 | Aguardando evidência |
| CT24 | Rótulos das ações | Inspecionar (+), lupa e lixeira; testar com leitor de tela | Todos têm rótulo acessível | RF28, RNF10 | US25 | Aguardando evidência |

## 4. Resumo

| Grupo | Casos | Aprovados | Reprovados | Aguardando evidência |
|---|---|---|---|---|
| Funcionais | CT01–CT19 (19) | 0 | 0 | 19 |
| Acessibilidade | CT20–CT24 (5) | 0 | 0 | 5 |
| **Total** | **24** | **0** | **0** | **24** |

## 5. Lacunas de cobertura

Estes itens ainda não têm caso de teste e podem ser acrescentados ao plano:

| Item | Sugestão de teste |
|---|---|
| RN07 | Cadastrar descrição só com espaços |
| RN09 | Cadastrar valor com mais de 2 casas decimais |
| RN03, RN04, RN06 | Conferir as listas de ano, mês e categoria |
| RF24 | Alternar entre Cadastro e Consulta pelo menu |
| RNF04 | Medir o tempo das operações (meta: até 2 s) |
| RNF05 | Repetir os testes principais em Chrome, Edge e Firefox |
