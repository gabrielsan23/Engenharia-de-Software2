# 1. Visão Geral do Sistema

**Versão:** 2.0 — revisão de 30/10/2026
**Projeto Jira:** SCRUM — Engenharia de Software II (documento SCRUM-32)
**Status geral:** os 4 épicos, as 26 histórias, os 7 bugs e as tarefas de documentação estão **Concluído** no Jira.

> **Nota de verificação:** os arquivos de código usados nesta revisão ainda estavam na versão original. As correções de bugs e a acessibilidade para daltonismo constam como concluídas no Jira, mas não foram confirmadas no código. Veja [Requisitos](02-requisitos.md).

## Resumo

O **Aplicativo de Orçamento Pessoal Mensal** é uma aplicação web que permite **cadastrar, consultar, filtrar e excluir** despesas pessoais. Funciona inteiramente no navegador, sem backend e sem banco de dados tradicional: os registros ficam no `localStorage`.

## Funcionalidades

| Tela | Arquivo | O que faz |
|---|---|---|
| Cadastro de despesas | `index.html` | Formulário com Ano, Mês, Dia, Tipo, Descrição e Valor; modal de sucesso ou erro |
| Consulta de despesas | `consulta.html` | Tabela com Data, Tipo, Descrição e Valor; filtros combináveis; exclusão com confirmação |
| Acessibilidade para daltonismo | ambas | Informação não depende só de cor; contraste e paleta revisados (EP04) |

**Categorias:** Alimentação, Educação, Lazer, Saúde e Transporte.

## Tecnologias

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 e Bootstrap 4 | Estilo, layout responsivo, componentes e modais |
| JavaScript ES6 | Validações, filtros e regras de funcionamento |
| localStorage | Persistência local no navegador |
| Font Awesome | Ícones dos botões |

## Fora do escopo

Backend, banco de dados remoto, contas de usuário, sincronização entre dispositivos e qualquer funcionalidade além das listadas.

## Equipe

| Membro | Foco | Histórias | SP |
|---|---|---|---|
| Arthur Paulo | Cadastro, exclusão, responsividade, paleta e ícones | US01, US02, US06, US15, US19, US24, US25 | 15 |
| Jaqueline Silva | Validação, mensagens, contraste e cor | US03, US05, US22, US23 | 13 |
| Lucas Diogo | Armazenamento, consulta e integridade | US04, US07, US08, US17, US18 | 13 |
| Vinicius Topgian | Filtros | US09 a US14 | 14 |
| Gabriel Santana | Confirmação, tratamento de erros e testes | US16, US20, US21, US26 | 13 |

## Planejamento em 3 sprints

| Sprint | Escopo | Histórias | Story Points | Status no Jira |
|---|---|---|---|---|
| Sprint 1 — Cadastro | Cadastro e armazenamento | US01–US06 (SCRUM-10 a 15) | 15 | Concluído |
| Sprint 2 — Consulta | Consulta e filtragem | US07–US14 (SCRUM-16 a 23) | 19 | Concluído |
| Sprint 3 — Qualidade | Exclusão, qualidade e acessibilidade | US15–US26 (SCRUM-24 a 30 e 39 a 43) | 34 | Concluído |
| **Total** | | **26 histórias** | **68** | |

A Sprint 3 inclui 20 SP originais (exclusão e qualidade) e 14 SP de acessibilidade (EP04).

## Épicos

| Épico | Chave | Histórias | SP | Status |
|---|---|---|---|---|
| EP01 — Cadastro e Armazenamento de Despesas | SCRUM-7 | US01–US06 | 15 | Concluído |
| EP02 — Consulta e Filtragem de Despesas | SCRUM-8 | US07–US14 | 19 | Concluído |
| EP03 — Exclusão e Qualidade do Sistema | SCRUM-9 | US15–US21 | 20 | Concluído |
| EP04 — Acessibilidade para Daltonismo | SCRUM-38 | US22–US26 | 14 | Concluído |

## Mapa da documentação

| Documento | Arquivo | Jira |
|---|---|---|
| Requisitos (RF, RNF, RN) | [02-requisitos.md](02-requisitos.md) | SCRUM-31 |
| Arquitetura e Modelagem | [03-arquitetura.md](03-arquitetura.md) | SCRUM-33 |
| Casos de Uso | [04-casos-de-uso.md](04-casos-de-uso.md) | SCRUM-34 |
| Plano de Testes | [05-plano-de-testes.md](05-plano-de-testes.md) | SCRUM-35 |
| Riscos e Limitações | [06-riscos-e-limitacoes.md](06-riscos-e-limitacoes.md) | SCRUM-36 |
| Matriz de Rastreabilidade | [07-matriz-de-rastreabilidade.md](07-matriz-de-rastreabilidade.md) | SCRUM-37 |
| Acessibilidade para Daltonismo | [08-acessibilidade-daltonismo.md](08-acessibilidade-daltonismo.md) | SCRUM-44 |

## Limitações conhecidas

- Os dados ficam presos ao navegador e ao endereço do site; limpar os dados do navegador apaga as despesas.
- Bootstrap, jQuery e Font Awesome vêm de CDN, então a interface precisa de internet.
- Os resultados dos testes funcionais ainda não foram registrados com evidências ([Plano de Testes](05-plano-de-testes.md)).
