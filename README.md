# 💰 Orçamento Pessoal

Aplicação web desenvolvida para realizar o cadastro, a consulta e o gerenciamento de despesas pessoais, permitindo ao usuário organizar seus gastos de maneira simples e prática.

## 🚀 Funcionalidades

- **Cadastro de despesas:** registro de data, tipo, descrição e valor.
- **Consulta de despesas:** pesquisa por ano, mês, dia, tipo, descrição e valor.
- **Armazenamento local:** utilização do `localStorage` para salvar os registros no navegador.
- **Acessibilidade:** simulação de diferentes tipos de daltonismo para testar a visualização das cores.
- **Dados para testes:** cadastro automático de cinco despesas de exemplo na primeira utilização, facilitando a demonstração das funcionalidades.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 4
- Font Awesome
- LocalStorage API

## 📂 Estrutura do projeto

- `index.html` — página de cadastro de despesas.
- `consulta.html` — página de consulta e pesquisa de despesas.
- `preview.html` — página de testes de cores e acessibilidade.
- `app.js` — lógica principal da aplicação.
- `acessibilidade.js` — funcionalidades relacionadas à acessibilidade de cores.
- `dados-teste.js` — inicialização de despesas de exemplo no armazenamento local.

## 💾 Armazenamento de dados

Os registros são armazenados no `localStorage` do navegador, permitindo que as despesas permaneçam salvas mesmo após fechar e reabrir a aplicação no mesmo navegador.

Na primeira utilização, o arquivo `dados-teste.js` adiciona cinco despesas de exemplo, caso ainda não existam registros salvos. Isso facilita a realização de testes sem a necessidade de cadastrar todas as despesas manualmente.

**Observação:** os dados ficam armazenados localmente no navegador e não são compartilhados automaticamente entre dispositivos ou navegadores diferentes.

## ▶️ Como executar o projeto

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Cadastre despesas ou acesse a página de consulta para visualizar e pesquisar os registros.

## 🎯 Objetivo do projeto

O projeto tem como objetivo aplicar conhecimentos de desenvolvimento web, manipulação do DOM, armazenamento de dados no navegador, organização de código JavaScript e implementação de recursos de acessibilidade.

---
Desenvolvido como projeto de estudos em desenvolvimento web.
