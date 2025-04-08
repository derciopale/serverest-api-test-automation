# Cypress Serverest API Tests

Este é um projeto de automação de testes de API desenvolvido com Cypress, utilizando a API Serverest como ambiente de testes. A API simula um sistema de e-commerce e oferece endpoints para cadastro e autenticação de usuários, gerenciamento de produtos e pedidos.

## 📋 Tabela de Conteúdos
- [Objetivo](#-objetivo)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-como-executar)
- [Estrutura de Testes](#-testes-disponíveis)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Objetivo

Automatizar testes de API RESTful com foco em:
- Validação de autenticação (login)
- Criação, listagem e exclusão de usuários
- Cadastro e listagem de produtos
- Criação de carrinhos e pedidos

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)
- [Cypress](https://docs.cypress.io/)
- [Faker.js](https://github.com/faker-js/faker) (opcional para gerar dados falsos)
- [Serverest](https://serverest.dev/) – API de testes

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com o Node.js)
- Git (para clonar o repositório)

## 🚀 Como executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/derciopale/serverest-api-test-automation.git
   cd serverest-api-test-automation
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute os testes**
   - Modo interativo (com interface gráfica):
     ```bash
     npx cypress open
     ```
   - Modo headless (linha de comando):
     ```bash
     npx cypress run
     ```

## 🧪 Testes disponíveis

### 🔐 Autenticação
- Login com credenciais válidas
- Validação de credenciais inválidas

### 👥 Usuários
- Cadastro de novos usuários
- Listagem de usuários
- Validação de usuário existente

### 🛍️ Produtos
- Cadastro de produtos
- Listagem e verificação de atributos

### 🛒 Pedidos
- Criação de pedidos com produtos válidos
- Validação de resposta dos endpoints

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
