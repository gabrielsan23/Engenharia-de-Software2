# 8. Acessibilidade para Daltonismo

Objetivo: garantir que pessoas com daltonismo (protanopia, deuteranopia, tritanopia e acromatopsia) usem o cadastro, a consulta e a exclusão de despesas **sem depender apenas da cor** para entender mensagens, estados e ações.

**Versão:** 2.0 — revisão de 30/10/2026 · **Status do documento:** Concluído (Jira: SCRUM-44)
**Épico:** EP04 (SCRUM-38) — Concluído · **Sprint:** Sprint 3 — Qualidade · **Total:** 14 SP
**Complementa:** [Requisitos](02-requisitos.md) (continua a numeração de RF, RNF e RN).

> **Nota de verificação:** as cinco histórias de acessibilidade estão **Concluído** no Jira, conforme marcado pela equipe. Os arquivos de código analisados nesta revisão ainda eram os originais e não mostravam as alterações. Por isso a coluna "Evidência" está como **Reportado**. Os testes CT20 a CT24 aguardam execução e evidência.

## 1. Ponto de partida (código original)

| Elemento | Situação observada |
|---|---|
| Modais de sucesso, erro e aviso | Cores `bg-success`, `bg-danger`, `bg-warning`; título textual, sem ícone |
| Botões "Sim" e "Não" | Verde e vermelho, com texto |
| Botão de exclusão | Vermelho, só ícone, sem rótulo acessível |
| Botões (+) e lupa | Só ícone, sem rótulo acessível |
| Cabeçalho do modal de exclusão | Texto branco sobre amarelo (contraste suspeito) |
| Paleta | Padrão do Bootstrap 4 |

## 2. Requisitos funcionais

| ID | Requisito | Critério de aceitação | Status | Evidência | História |
|---|---|---|---|---|---|
| RF26 | Identificar o tipo de mensagem por texto e ícone, além da cor | Modais de sucesso, erro e aviso têm título e ícone diferentes e continuam distinguíveis em escala de cinza | Concluído | Reportado | US22 |
| RF27 | Distinguir confirmar e cancelar sem depender da cor | "Sim" e "Não" distinguíveis em escala de cinza (texto, posição ou forma) | Concluído | Reportado | US22 |
| RF28 | Rotular as ações que só têm ícone | Botões (+), lupa e lixeira têm `aria-label` ou texto visível | Concluído | Reportado | US25 |

## 3. Requisitos não funcionais

| ID | Requisito | Critério de aceitação | Status | Evidência |
|---|---|---|---|---|
| RNF13 | Acessibilidade para daltonismo | Interface utilizável nas quatro simulações, sem perda de informação | Concluído | Reportado |
| RNF14 | Contraste mínimo (WCAG 2.1 AA) | Texto normal ≥ 4,5:1; texto grande e componentes ≥ 3:1, medido com ferramenta registrada | Concluído | Reportado (bug SCRUM-51) |
| RNF15 | Verificabilidade | Procedimento repetível de teste com simulador e evidências guardadas | Concluído | Reportado |

## 4. Regras de negócio

| ID | Regra | Critério de aceitação | Status | Evidência |
|---|---|---|---|---|
| RN25 | A cor nunca é o único meio de transmitir informação | Toda mensagem, estado ou ação tem também texto, ícone ou forma | Concluído | Reportado |
| RN26 | Contraste mínimo obrigatório | Nenhum par texto/fundo abaixo do mínimo do RNF14 | Concluído | Reportado |
| RN27 | Pares de cor proibidos como único diferenciador | Verde × vermelho e verde × marrom não são o único recurso de distinção | Concluído | Reportado |
| RN28 | Consistência dos indicadores visuais | A mesma cor, ícone e texto significam o mesmo em todas as telas | Concluído | Reportado |

## 5. Histórias

| US | Chave | Título | SP | Responsável | Status |
|---|---|---|---|---|---|
| US22 | SCRUM-39 | Não depender apenas de cor para transmitir informação | 3 | Jaqueline | Concluído |
| US23 | SCRUM-40 | Garantir contraste mínimo entre texto e fundo | 3 | Jaqueline | Concluído |
| US24 | SCRUM-41 | Adotar paleta de cores segura para daltonismo | 3 | Arthur | Concluído |
| US25 | SCRUM-42 | Adicionar ícones e rótulos de apoio às ações e mensagens | 2 | Arthur | Concluído |
| US26 | SCRUM-43 | Testar acessibilidade com simuladores de daltonismo | 3 | Gabriel | Concluído |
| | | **Total** | **14** | | |

**Bug relacionado:** SCRUM-51 — baixo contraste no título do modal de exclusão (Jaqueline) — Concluído.

## 6. Rastreabilidade

| US | Requisitos | Regras | Testes |
|---|---|---|---|
| US22 | RF26, RF27, RNF13 | RN25, RN28 | CT20, CT21 |
| US23 | RNF14, RNF01 | RN26 | CT22 |
| US24 | RNF13, RNF09 | RN27, RN28 | CT23 |
| US25 | RF28, RNF10 | RN25, RN28 | CT24 |
| US26 | RNF13–RNF15 | RN25–RN28 | CT20–CT24 |

## 7. Casos de teste

Detalhes completos no [Plano de Testes](05-plano-de-testes.md). Ferramenta: Chrome DevTools > Rendering > Emulate vision deficiencies.

| ID | Objetivo | Resultado esperado | Situação |
|---|---|---|---|
| CT20 | Modais de sucesso, erro e exclusão nas quatro simulações | Os três modais distinguíveis por texto e ícone | Aguardando evidência |
| CT21 | "Sim" e "Não" em escala de cinza | Botões distinguíveis sem a cor | Aguardando evidência |
| CT22 | Medir contraste dos pares texto/fundo | 4,5:1 para texto; 3:1 para componentes | Aguardando evidência |
| CT23 | Revisar a paleta nos três tipos de daltonismo | Nenhum par verde × vermelho como único diferenciador | Aguardando evidência |
| CT24 | Inspecionar rótulos de (+), lupa e lixeira; leitor de tela | Todos têm rótulo acessível | Aguardando evidência |

## 8. Para encerrar a verificação

1. Conferir `app.js`, `index.html` e `consulta.html` atualizados (RF26–RF28 e RN25–RN28 passam a "Verificado").
2. Registrar o contraste medido (valores e ferramenta) para o RNF14.
3. Executar CT20 a CT24 com capturas de tela como evidência.
