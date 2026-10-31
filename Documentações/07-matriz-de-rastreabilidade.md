# 7. Matriz de Rastreabilidade

Rastreabilidade entre **épicos, histórias, requisitos, regras de negócio, casos de uso, testes, bugs e responsáveis**.

**Versão:** 2.2 — revisão de 30/10/2026 · **Status do documento:** Concluído (Jira: SCRUM-37)
**Status das histórias e bugs:** todos Concluído no Jira em 30/10/2026. Os testes (CT) aguardam evidência ([Plano de Testes](05-plano-de-testes.md)).

## 1. Épicos

| Épico | Chave | SP | Histórias | Status |
|---|---|---|---|---|
| EP01 — Cadastro e Armazenamento | SCRUM-7 | 15 | US01–US06 | Concluído |
| EP02 — Consulta e Filtragem | SCRUM-8 | 19 | US07–US14 | Concluído |
| EP03 — Exclusão e Qualidade | SCRUM-9 | 20 | US15–US21 | Concluído |
| EP04 — Acessibilidade para Daltonismo | SCRUM-38 | 14 | US22–US26 | Concluído |

## 2. Histórias → requisitos, regras, casos de uso e testes

| Épico | US | Chave | SP | Sprint | Responsável | Requisitos | Regras | CDU | Testes | Bugs | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EP01 | US01 | SCRUM-10 | 2 | 1 | Arthur | RF01, RF24, RNF01 | — | CDU01 | CT18 | — | Concluído |
| EP01 | US02 | SCRUM-11 | 2 | 1 | Arthur | RF02 | RN01, RN04, RN06 | CDU01 | CT01 | — | Concluído |
| EP01 | US03 | SCRUM-12 | 5 | 1 | Jaqueline | RF03, RF04, RF09 | RN01–RN09 | CDU01 | CT02, CT03, CT04 | SCRUM-45 | Concluído |
| EP01 | US04 | SCRUM-13 | 3 | 1 | Lucas | RF05–RF07, RNF03, RNF06 | RN10, RN11, RN23 | CDU01 | CT01, CT05 | — | Concluído |
| EP01 | US05 | SCRUM-14 | 2 | 1 | Guilherme | RF08, RF09, RNF08 | RN01 | CDU01 | CT01, CT02 | — | Concluído |
| EP01 | US06 | SCRUM-15 | 1 | 1 | Guilherme | RF10 | — | CDU01 | CT01 | — | Concluído |
| EP02 | US07 | SCRUM-16 | 2 | 2 | Lucas | RF11, RF24, RNF01 | RN24 | CDU02 | CT06 | — | Concluído |
| EP02 | US08 | SCRUM-17 | 3 | 2 | Lucas | RF12, RNF03, RNF06 | RN11, RN24 | CDU02 | CT05, CT06 | — | Concluído |
| EP02 | US09 | SCRUM-18 | 3 | 2 | Vinicius | RF13–RF15 | RN12, RN14 | CDU03 | CT07, CT08, CT09 | SCRUM-49 | Concluído |
| EP02 | US10 | SCRUM-19 | 2 | 2 | Vinicius | RF16 | RN12, RN15 | CDU03 | CT10 | — | Concluído |
| EP02 | US11 | SCRUM-20 | 3 | 2 | Vinicius | RF17 | RN12, RN16 | CDU03 | CT11 | SCRUM-46 | Concluído |
| EP02 | US12 | SCRUM-21 | 2 | 2 | Guilherme | RF18 | RN09, RN12, RN17 | CDU03 | CT12 | — | Concluído |
| EP02 | US13 | SCRUM-22 | 3 | 2 | Vinicius | RF19 | RN12, RN13 | CDU03 | CT13 | — | Concluído |
| EP02 | US14 | SCRUM-23 | 1 | 2 | Guilherme | RF25 | RN22 | CDU03 | CT14 | SCRUM-48 | Concluído |
| EP03 | US15 | SCRUM-24 | 2 | 3 | Arthur | RF20 | RN10, RN20 | CDU04 | CT15 | — | Concluído |
| EP03 | US16 | SCRUM-25 | 2 | 3 | Gabriel | RF21, RF22 | RN18, RN19 | CDU04 | CT15, CT16 | — | Concluído |
| EP03 | US17 | SCRUM-26 | 2 | 3 | Guilherme | RF23 | RN21, RN24 | CDU04 | CT15 | — | Concluído |
| EP03 | US18 | SCRUM-27 | 3 | 3 | Lucas | RF06, RF20, RNF06 | RN10, RN20, RN23 | CDU04 | CT17 | — | Concluído |
| EP03 | US19 | SCRUM-28 | 3 | 3 | Arthur | RNF01, RNF02, RNF10 | — | — | CT18 | SCRUM-50 | Concluído |
| EP03 | US20 | SCRUM-29 | 3 | 3 | Gabriel | RF09, RNF07, RNF08 | RN07, RN08 | CDU01, CDU02 | CT19 | SCRUM-47 | Concluído |
| EP03 | US21 | SCRUM-30 | 5 | 3 | Gabriel | Todos | Todas | Todos | CT01–CT19 | — | Concluído |
| EP04 | US22 | SCRUM-39 | 3 | 3 | Jaqueline | RF26, RF27, RNF13 | RN25, RN28 | Todos | CT20, CT21 | — | Concluído |
| EP04 | US23 | SCRUM-40 | 3 | 3 | Jaqueline | RNF14, RNF01 | RN26 | Todos | CT22 | SCRUM-51 | Concluído |
| EP04 | US24 | SCRUM-41 | 3 | 3 | Guilherme | RNF13, RNF09 | RN27, RN28 | Todos | CT23 | — | Concluído |
| EP04 | US25 | SCRUM-42 | 2 | 3 | Arthur | RF28, RNF10 | RN25, RN28 | Todos | CT24 | — | Concluído |
| EP04 | US26 | SCRUM-43 | 3 | 3 | Gabriel | RNF13–RNF15 | RN25–RN28 | Todos | CT20–CT24 | — | Concluído |

## 3. Story Points

| Sprint | Histórias | SP |
|---|---|---|
| Sprint 1 — Cadastro | US01–US06 | 15 |
| Sprint 2 — Consulta | US07–US14 | 19 |
| Sprint 3 — Qualidade | US15–US26 | 34 |
| **Total** | 26 histórias | **68** |

| Responsável | Histórias | SP |
|---|---|---|
| Arthur | US01, US02, US15, US19, US25 (5) | 11 |
| Jaqueline Silva | US03, US22, US23 (3) | 11 |
| Lucas Diogo | US04, US07, US08, US18 (4) | 11 |
| Vinicius Topgian | US09, US10, US11, US13 (4) | 11 |
| Gabriel Santana | US16, US20, US21, US26 (4) | 13 |
| Guilherme de Oliveira | US05, US06, US12, US14, US17, US24 (6) | 11 |
| **Total** | **26** | **68** |

> No Jira, o Guilherme de Oliveira aparece como `guilhermeolivsilva0506`.

## 4. Bugs → história → requisito

| Bug | Resumo | História | Requisitos e regras | Responsável | Status |
|---|---|---|---|---|---|
| SCRUM-45 | Cadastro aceita data e valor inválidos | US03 | RF04, RN02, RN05, RN08 | Jaqueline | Concluído |
| SCRUM-46 | Busca por descrição só com texto idêntico | US11 | RF17, RN16 | Vinicius | Concluído |
| SCRUM-47 | Descrição interpretada como HTML | US20 | RNF07 | Lucas | Concluído |
| SCRUM-48 | Consulta sem resultado não exibe mensagem | US14 | RF25, RN22 | Guilherme | Concluído |
| SCRUM-49 | Filtro de dia não reconhece "2" e "02" | US09 | RF15, RN14 | Arthur | Concluído |
| SCRUM-50 | Páginas sem meta viewport | US19 | RNF02 | Arthur | Concluído |
| SCRUM-51 | Baixo contraste no modal de exclusão | US23 | RNF14, RN26 | Jaqueline | Concluído |

## 5. Dependências entre histórias

- US01 → US02 → US03 → US04 → US05 e US06
- US04 → US07 e US08 → US09, US10, US11, US12 → US13 → US14
- US07 → US15 → US16 → US17
- US04 e US15 → US18
- US01 e US07 → US19
- US03, US04 e US08 → US20
- US15 a US20 → US21

## 6. Cobertura

**Histórias:** todos os requisitos e regras têm ao menos uma história associada.

**Casos de teste:** a cobertura por teste **não é total**.

| Tipo | Total | Com caso de teste | Sem caso de teste |
|---|---|---|---|
| Requisitos funcionais | 28 | 27 | RF24 (navegação; só indiretamente em CT18) |
| Requisitos não funcionais | 15 | 9 | RNF01, RNF04, RNF05, RNF09, RNF11, RNF12 |
| Regras de negócio | 28 | 23 | RN03, RN04, RN06, RN07, RN09 |

**Recomendação:** acrescentar ao plano casos para descrição só com espaços (RN07), casas decimais do valor (RN09), listas de ano, mês e categoria (RN03, RN04, RN06), navegação entre telas (RF24), desempenho em até 2 s (RNF04) e compatibilidade em Chrome, Edge e Firefox (RNF05). RNF01, RNF09, RNF11 e RNF12 são verificáveis por inspeção.

**Ressalva:** os 24 casos de teste ainda não têm resultado registrado. A rastreabilidade está completa quanto às histórias; a **verificação** depende das evidências no [Plano de Testes](05-plano-de-testes.md).
