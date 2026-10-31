# 💰 Aplicativo de Orçamento Pessoal Mensal

Aplicação web para **cadastrar, consultar, filtrar e excluir** despesas pessoais. Funciona inteiramente no navegador, sem backend e sem banco de dados tradicional: os registros ficam no `localStorage`.

> Projeto da disciplina **Engenharia de Software II**, gerenciado no Jira (projeto `SCRUM`) com 3 sprints e 68 Story Points.

## ✨ Funcionalidades

| Tela | Arquivo | O que faz |
|---|---|---|
| Cadastro de despesas | `index.html` | Formulário com Ano, Mês, Dia, Tipo, Descrição e Valor; modal de sucesso ou erro |
| Consulta de despesas | `consulta.html` | Tabela com Data, Tipo, Descrição e Valor; filtros combináveis; exclusão com confirmação |
| Acessibilidade para daltonismo | ambas | Informação não depende só de cor; contraste e paleta revisados |

**Categorias:** Alimentação, Educação, Lazer, Saúde e Transporte.

## 🛠️ Tecnologias

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 e Bootstrap 4 | Estilo, layout responsivo, componentes e modais |
| JavaScript ES6 | Validações, filtros e regras de funcionamento |
| localStorage | Persistência local no navegador |
| Font Awesome | Ícones dos botões |

## ▶️ Como executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o `index.html` no navegador (não precisa de servidor).
3. Cadastre despesas e use o menu **Consulta** para pesquisá-las.

> Bootstrap, jQuery e Font Awesome são carregados por CDN, então é preciso ter internet.

## 📁 Estrutura

```
orcamento-pessoal/
├── index.html          # tela de cadastro
├── consulta.html       # tela de consulta
├── app.js              # classes Despesa e Bd + funções de tela
├── logo.png            # logotipo da barra de navegação
├── README.md
└── docs/
    ├── 01-visao-geral.md
    ├── 02-requisitos.md
    ├── 03-arquitetura.md
    ├── 04-casos-de-uso.md
    ├── 05-plano-de-testes.md
    ├── 06-riscos-e-limitacoes.md
    ├── 07-matriz-de-rastreabilidade.md
    └── 08-acessibilidade-daltonismo.md
```

## 📚 Documentação

| Documento | Conteúdo |
|---|---|
| [Visão Geral](docs/01-visao-geral.md) | Escopo, equipe, sprints e épicos |
| [Requisitos](docs/02-requisitos.md) | 28 RF, 15 RNF e 28 regras de negócio |
| [Arquitetura e Modelagem](docs/03-arquitetura.md) | Componentes, modelo de dados e fluxos |
| [Casos de Uso](docs/04-casos-de-uso.md) | CDU01 a CDU04 |
| [Plano de Testes](docs/05-plano-de-testes.md) | 24 casos de teste e registro de execução |
| [Riscos e Limitações](docs/06-riscos-e-limitacoes.md) | Riscos, mitigações e limitações |
| [Matriz de Rastreabilidade](docs/07-matriz-de-rastreabilidade.md) | Histórias, requisitos, testes, bugs e responsáveis |
| [Acessibilidade para Daltonismo](docs/08-acessibilidade-daltonismo.md) | Requisitos RF26–RF28, RNF13–RNF15, RN25–RN28 |

## 👥 Equipe
 
| Membro | Foco | Histórias | SP |
|---|---|---|---|
| Arthur | Cadastro, exclusão, responsividade e ícones | US01, US02, US15, US19, US25 | 11 |
| Jaqueline Silva | Validação, contraste e cor | US03, US22, US23 | 11 |
| Lucas Diogo | Armazenamento, consulta e integridade | US04, US07, US08, US18 | 11 |
| Vinicius Topgian | Filtros | US09, US10, US11, US13 | 11 |
| Gabriel Santana | Confirmação, tratamento de erros e testes | US16, US20, US21, US26 | 13 |
| Guilherme de Oliveira | Mensagens, limpeza do formulário, filtro de valor, resultado vazio, atualização da listagem e paleta | US05, US06, US12, US14, US17, US24 | 11 |
| **Total** | | **26 histórias** | **68** |

## 🗓️ Planejamento

| Sprint | Escopo | Histórias | Story Points |
|---|---|---|---|
| Sprint 1 — Cadastro | Cadastro e armazenamento | US01–US06 | 15 |
| Sprint 2 — Consulta | Consulta e filtragem | US07–US14 | 19 |
| Sprint 3 — Qualidade | Exclusão, qualidade e acessibilidade | US15–US26 | 34 |
| **Total** | | **26 histórias** | **68** |

## ⚠️ Limitações

- Os dados ficam presos ao navegador e ao endereço do site; limpar os dados do navegador apaga as despesas.
- Não há contas de usuário nem sincronização entre dispositivos.
- Os resultados dos testes funcionais ainda precisam ser registrados com evidências (veja o [Plano de Testes](docs/05-plano-de-testes.md)).
