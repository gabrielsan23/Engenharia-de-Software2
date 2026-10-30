# 6. Riscos e Limitações

Registro dos riscos e das limitações do projeto, com a situação de cada mitigação.

**Versão:** 2.0 — revisão de 30/10/2026 · **Status do documento:** Concluído (Jira: SCRUM-36)

> **Nota de verificação:** a coluna "Status" usa a situação do bug ou da história no Jira (todos Concluído). Como os arquivos de código analisados ainda eram os originais, a correção ficou como **Mitigado (reportado)** até a confirmação no código atualizado.

## 1. Limitações (inerentes à arquitetura)

| ID | Limitação | Impacto | Situação |
|---|---|---|---|
| L01 | Dados no localStorage ficam presos ao navegador e ao endereço do site | Sem sincronização entre dispositivos nem compartilhamento | Aceita (escopo) |
| L02 | O usuário ou o navegador pode apagar os dados do site | Perda das despesas, sem recuperação centralizada | Aceita (escopo) |
| L03 | Bootstrap, jQuery, Popper e Font Awesome vêm de CDN | A interface depende de internet | Aceita (escopo) |
| L04 | localStorage tem cota limitada (alguns MB) | Gravação pode falhar com muitos registros | Tratada em US20 (reportado) |
| L05 | Os filtros percorrem todos os registros | Desempenho pode cair com volume grande | Aceita (volume pequeno) |
| L06 | Sem contas de usuário nem autenticação | Quem acessa o navegador vê os dados | Aceita (escopo) |

## 2. Riscos

| ID | Risco | Prob. | Impacto | Origem | Mitigação | Status |
|---|---|---|---|---|---|---|
| R01 | Injeção de HTML ou script pela descrição (`innerHTML`) | Média | Alto | Bug SCRUM-47 | Exibir como texto (US20) | Mitigado (reportado) |
| R02 | Dados inválidos gravados (data inexistente, valor negativo ou não numérico) | Alta | Médio | Bug SCRUM-45 | Validação completa (US03) | Mitigado (reportado) |
| R03 | Falha de gravação ou JSON corrompido derruba a listagem | Baixa | Médio | US20 | Tratamento de erros (US20) | Mitigado (reportado) |
| R04 | Busca por descrição não encontra registros (igualdade exata) | Alta | Baixo | Bug SCRUM-46 | Busca parcial sem diferenciar maiúsculas (US11) | Mitigado (reportado) |
| R05 | Filtro de dia ou valor falha por formato ("2" x "02", "80" x "80.00") | Média | Baixo | Bug SCRUM-49 | Normalizar a comparação (US09, US12) | Mitigado (reportado); valor: verificar |
| R06 | Layout inadequado no celular (sem meta viewport) | Média | Médio | Bug SCRUM-50 | Incluir a meta viewport (US19) | Mitigado (reportado) |
| R07 | Estimativa de 68 SP é inicial e pode mudar | Média | Baixo | Planejamento | Reestimar ao longo das sprints | Encerrado (3 sprints concluídas no Jira) |
| R08 | Meta de 2 s (RNF04) não foi medida | — | Baixo | Plano de testes | Definir ambiente e medir (US21) | Aberto |
| R09 | A lista de anos só contém 2026 | Alta | Médio | Formulários | Decisão do responsável: ampliar ou tornar dinâmica | Aberto |
| R10 | Atualização com `reload` perde os filtros após excluir | Média | Baixo | US17 | Atualizar a tabela sem recarregar a página | Aberto |
| R11 | Documentação não acompanha mudanças do código | Média | Baixo | — | Atualizar os documentos a cada mudança de escopo | Em acompanhamento |
| R12 | Verde e vermelho como únicos diferenciadores (Sim/Não, sucesso/erro) | Alta | Médio | EP04 | Texto, ícone e paleta segura (US22, US24) | Mitigado (reportado) |
| R13 | Baixo contraste no cabeçalho do modal de exclusão | Média | Médio | Bug SCRUM-51 | Medir e ajustar (US23) | Mitigado (reportado) |
| R14 | Botões só com ícone, sem rótulo acessível | Média | Médio | EP04 | `aria-label` ou texto visível (US25) | Mitigado (reportado) |
| R15 | Histórias de teste (US21, US26) concluídas sem resultados registrados | Média | Alto | Jira | Registrar evidências no [Plano de Testes](05-plano-de-testes.md) | **Aberto** |
| R16 | Código atualizado ainda não conferido contra a documentação | Alta | Médio | Revisão de 30/10/2026 | Conferir `app.js`, `index.html` e `consulta.html` atualizados | **Aberto** |

## 3. Resumo

| Situação | Quantidade |
|---|---|
| Mitigado (reportado) | 9 |
| Encerrado | 1 |
| Aberto ou em acompanhamento | 6 |
| Limitações aceitas ou tratadas | 6 |

## 4. Próximos passos

1. Conferir o código atualizado para confirmar as mitigações (R16).
2. Executar os testes e registrar as evidências (R15, R08).
3. Decidir o intervalo de anos e a atualização sem recarregar (R09, R10).
