# 3. Arquitetura e Modelagem

**Versão:** 2.0 — revisão de 30/10/2026 · **Status:** Concluído (Jira: SCRUM-33)

Aplicação **front-end estática**, sem backend e sem banco de dados tradicional. Toda a lógica roda no navegador e os dados ficam no `localStorage`. Este documento descreve o código **analisado** (`app.js`, `index.html`, `consulta.html`).

> **Nota de verificação:** os arquivos analisados são da versão original. As mudanças feitas pela equipe depois (correções de bugs e acessibilidade) estão na seção 7 como "reportadas" e precisam do código atualizado para entrar nas seções 2 a 6.

## 1. Diagrama lógico

```
[index.html]      [consulta.html]
      \               /
       \             /
         [ app.js ]
  classes Despesa e Bd + funções de tela
              |
   [ localStorage do navegador ]
  chaves: 'id', '1', '2', '3', ...
```

Bootstrap 4, jQuery, Popper e Font Awesome são carregados por CDN.

## 2. Componentes do `app.js`

| Componente | Tipo | Responsabilidade |
|---|---|---|
| `Despesa` | Classe | Modelo da despesa (ano, mes, dia, tipo, descricao, valor) e `validarDados()` |
| `Bd` | Classe | Acesso ao localStorage: `getProximoId`, `gravar`, `recuperarRegistros`, `pesquisar`, `remover` |
| `cadastrarDespesa()` | Função | Lê o formulário, valida, grava e abre o modal de sucesso ou erro |
| `carregaListaDespesas()` | Função | Limpa e monta a tabela, converte o código do tipo em nome, cria o botão de exclusão e o modal de confirmação |
| `pesquisarDespesa()` | Função | Lê os filtros, chama `Bd.pesquisar` e recarrega a tabela |

## 3. Modelo de dados

Cada despesa é gravada como JSON em uma chave numérica.

| Campo | Tipo armazenado | Observação |
|---|---|---|
| ano | texto | Lista do formulário: 2026 |
| mes | texto | "01" a "12" |
| dia | texto | Campo de texto livre |
| tipo | texto | "1" a "5" (código da categoria) |
| descricao | texto | Texto livre |
| valor | texto | Texto livre |

**Chave especial `id`:** guarda o último identificador usado. O próximo id é o último + 1, e ids de registros excluídos **não são reaproveitados**. O campo `id` é acrescentado ao objeto apenas na leitura.

**Categorias:** 1 Alimentação · 2 Educação · 3 Lazer · 4 Saúde · 5 Transporte.

## 4. Fluxos principais

| Fluxo | Sequência |
|---|---|
| Cadastro | formulário → `Despesa` → `validarDados()` → `Bd.gravar` → modal → limpar campos |
| Consulta | `onload` → `Bd.recuperarRegistros` → tabela |
| Pesquisa | filtros → `Bd.pesquisar` (filtros em sequência, lógica E) → tabela |
| Exclusão | botão → modal de confirmação → `Bd.remover(id)` → recarregar página |

## 5. Características técnicas verificadas no código analisado

| Aspecto | Situação |
|---|---|
| Validação | Apenas campos vazios |
| Comparação nos filtros | Textual (`==`); descrição por igualdade exata |
| Exibição na tabela | `innerHTML` com dados do usuário |
| Tratamento de erros | Sem `try/catch` em gravação e leitura |
| Atualização após excluir | `window.location.reload()` |
| Responsividade | Grid Bootstrap e menu colapsável; sem `<meta name="viewport">` |
| Cores de status | Classes Bootstrap `bg-success`, `bg-danger`, `bg-warning`, `btn-success`, `btn-danger` |

## 6. Decisões de arquitetura

| Decisão | Motivo | Consequência |
|---|---|---|
| localStorage em vez de banco | Escopo simples e sem servidor | Dados presos ao navegador; sem sincronização |
| Contador de id separado | Identificar e excluir registros individualmente | Ids não são reaproveitados |
| Classe `Bd` isolada | Separar acesso a dados da interface | Facilita trocar a camada de armazenamento no futuro |
| Bootstrap por CDN | Layout e modais prontos | Depende de internet |

## 7. Alterações concluídas no Jira e ainda não verificadas no código

| Tema | Bug ou história | Status Jira |
|---|---|---|
| Validação de data e valor | SCRUM-45 / US03 | Concluído |
| Busca parcial por descrição | SCRUM-46 / US11 | Concluído |
| Exibir descrição como texto, sem HTML | SCRUM-47 / US20 | Concluído |
| Mensagem de resultado vazio | SCRUM-48 / US14 | Concluído |
| Dia "2" = "02" no filtro | SCRUM-49 / US09 | Concluído |
| Meta viewport | SCRUM-50 / US19 | Concluído |
| Contraste do modal de exclusão | SCRUM-51 / US23 | Concluído |
| Acessibilidade para daltonismo (ícones, rótulos, paleta) | EP04 (SCRUM-38) | Concluído |
