# Carcará

API REST desenvolvida em **TypeScript** para gerenciamento de faturas (invoices) e clientes (customers) de uma empresa, seguindo uma **arquitetura em camadas**.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [tsx](https://github.com/esbuild-kit/tsx) — execução direta de TypeScript
- [dotenv](https://github.com/motdotla/dotenv) — variáveis de ambiente

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas, separando responsabilidades:

```
Server → Routes → Controllers → Services → Data
```

- **Server**: ponto de entrada da aplicação, configura o Express e as rotas.
- **Routes**: define os endpoints e direciona para os controllers.
- **Controllers**: recebem a requisição, tratam request/response.
- **Services**: contêm a regra de negócio.
- **Data**: fonte dos dados (atualmente mock em memória, com migração planejada para banco de dados).

## 📁 Estrutura de pastas

```
src/
├── controllers/
│   ├── customer.controller.ts
│   └── invoice.controller.ts
├── routes/
├── services/
├── mocks/
├── types.ts
└── server.ts
```

## 📦 Entidades

### Invoice (Fatura)

| Campo | Tipo |
|---|---|
| id | number |
| value | string |
| customer_id | number |
| status | "pending" \| "paid" |
| created_at | string / Date |

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/paulocoder82-star/carcara.git
cd carcara
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz com:
```
PORT=3000
```

4. Rode o projeto:
```bash
npx tsx src/server.ts
```

O servidor vai subir em `http://localhost:3000`.

## 🔌 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | /invoices | Lista todas as faturas |
| GET | /customers | Lista todos os clientes |

> Atualize esta tabela com todos os métodos e rotas implementados (POST, PUT, DELETE, etc).

## 🗺️ Próximos passos

- Migração da camada de dados para PostgreSQL
- Testes automatizados

## 👤 Autor

Desenvolvido por Paulo como projeto de estudo/portfólio.
