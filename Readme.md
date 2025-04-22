# 📚 Biblioteca Solidária - API de Gerenciamento de Livros

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Status](https://img.shields.io/badge/Status-Funcional-brightgreen)

API RESTful para gestão comunitária de livros, permitindo doações, empréstimos e devoluções.

## 🌟 Visão Geral

Solução desenvolvida para conectar doadores e leitores de livros em comunidades, com:

- Cadastro de livros disponíveis
- Sistema de empréstimo com prazo de 30 dias
- Controle de disponibilidade
- Notificações de atraso (simuladas)

**Problema Solucionado**: Facilitar o acesso à leitura através do compartilhamento comunitário de livros.

## 🛠 Funcionalidades Atuais

### 📚 Gestão de Livros

- Cadastro de novos livros
- Listagem completa do acervo
- Filtragem por categoria

### 🔄 Empréstimos

- Registro de empréstimos
- Controle de prazos
- Listagem de atrasados

## 🚀 Rotas da API

### **Livros**

| Método | Rota      | Descrição                      | Body (JSON)                  |
| ------ | --------- | ------------------------------ | ---------------------------- |
| GET    | `/livros` | Lista todos livros disponíveis | -                            |
| POST   | `/livros` | Cadastra novo livro            | `{titulo, autor, categoria}` |

### **Empréstimos**

| Método | Rota           | Descrição                   | Body (JSON)         |
| ------ | -------------- | --------------------------- | ------------------- |
| POST   | `/emprestimos` | Realiza empréstimo          | `{livroId, leitor}` |
| GET    | `/atrasados`   | Lista empréstimos atrasados | -                   |

**Exemplo de Request**:

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Clean Code","autor":"Robert Martin","categoria":"Programação"}'
```

## 💻 Como Executar

### Pré-requisitos

- Node.js
- npm

### Passo a Passo

```bash
# 1. Clone o repositório
git clone

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
npm run dev

# 4. Acesse via:
http://localhost:3000/livros
```

## 📂 Estrutura do Projeto

```
src/
├── controllers/    # Lógica das operações
├── data/           # Arquivos JSON (banco de dados simulado)
├── routes/         # Definição de endpoints
└── utils/          # Funções auxiliares
```

## 🔮 Melhorias Futuras

### Segurança

- [ ] Implementar autenticação JWT
- [ ] Adicionar roles (admin/usuário)
- [ ] Rate limiting para prevenção de abuso

### Funcionalidades

- [ ] Sistema de reservas
- [ ] Avaliação de livros
- [ ] Busca avançada (autor, título, etc.)

### Dados

- [ ] Migrar para MongoDB Atlas
- [ ] Implementar Redis para cache

## 🛠 Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Manipulação de Datas**: date-fns
- **Qualidade de Código**: ESLint, Prettier

---

Esta API foi desenvolvida como parte do Miniprojeto do Módulo 4 - Programadores do Amanhã.  
📌 Publicação no LinkedIn:
