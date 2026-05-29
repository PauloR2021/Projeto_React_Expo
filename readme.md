# 📋 MyList - Gerenciador de Tarefas

Aplicação Full Stack para gerenciamento de tarefas pessoais, permitindo cadastro de usuários, autenticação segura via JWT e controle de tarefas por usuário.

---

# 🚀 Tecnologias Utilizadas

## Frontend
- React Native
- Expo Router
- TypeScript
- Axios
- Async Storage
- React Navigation
- React Native Vector Icons

## Backend
- Java 21
- Spring Boot 3.5
- Spring Security
- JWT (JSON Web Token)
- Spring Data JPA
- PostgreSQL
- Flyway
- Swagger / OpenAPI
- Lombok

---

# 🏗 Arquitetura do Projeto

```text
myList/
│
├── frontend/      → Aplicação Mobile (React Native + Expo)
│
└── backend/       → API REST (Spring Boot)
```

---

# 📱 Frontend

Aplicação mobile desenvolvida utilizando React Native com Expo.

## Funcionalidades

### 🔐 Login
- Autenticação via API
- Recebimento do Token JWT
- Armazenamento seguro da sessão

### 👤 Cadastro de Usuário
- Criação de novos usuários
- Validação dos campos obrigatórios

### 📝 Listagem de Tarefas
- Consulta das tarefas do usuário autenticado
- Consumo da API utilizando Axios

### ➕ Criação de Tarefas
- Cadastro de novas tarefas
- Associação automática ao usuário logado

---

## Estrutura do Frontend

```text
frontend/
│
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── home/
│   │   └── criar/
│   │
│   └── _layout.tsx
│
├── src/
│   ├── services/
│   ├── styles/
│   ├── global/
│   └── assets/
│
└── package.json
```

---

## Executando o Frontend

### Instalar dependências

```bash
npm install
```

### Executar aplicação

```bash
npx expo start
```

ou

```bash
npm start
```

---

# ⚙️ Backend

API REST responsável pelo gerenciamento dos usuários, autenticação e tarefas.

---

## Funcionalidades

### 👤 Usuários

- Cadastro de usuários
- Senhas criptografadas utilizando BCrypt

### 🔐 Autenticação

- Login com email e senha
- Geração de Token JWT
- Proteção de endpoints

### 📝 Tarefas

- Cadastro de tarefas
- Consulta das tarefas do usuário autenticado

### 📚 Documentação

- Swagger UI integrado

---

## Estrutura do Backend

```text
backend/
│
├── Controller/
│   ├── AuthController
│   ├── UsuarioController
│   └── TarefaController
│
├── Service/
│
├── Repository/
│
├── Entity/
│
├── Dtos/
│
├── Infra/
│   ├── Security
│   ├── Cors
│   └── Documentation
│
└── Exceptions/
```

---

## Principais Endpoints

### Cadastro de Usuário

```http
POST /usuario
```

### Login

```http
POST /auth/login
```

### Criar Tarefa

```http
POST /tarefas
```

### Listar Tarefas

```http
GET /tarefas
```

---

# 🔑 Segurança

O sistema utiliza:

- Spring Security
- JWT Authentication
- BCrypt Password Encoder
- Filtros de autenticação
- Controle de acesso por usuário

---

# 🗄 Banco de Dados

Banco utilizado:

```text
PostgreSQL
```

Controle de versões:

```text
Flyway Migration
```

---

# 📖 Swagger

Após iniciar a API:

```text
http://localhost:8080/swagger-ui.html
```

ou

```text
http://localhost:8080/swagger-ui/index.html
```

---

# ▶️ Executando o Backend

### Instalar dependências

```bash
mvn clean install
```

### Executar aplicação

```bash
mvn spring-boot:run
```

---

# 📌 Fluxo da Aplicação

```text
Usuário
    │
    ▼
Cadastro
    │
    ▼
Login
    │
    ▼
JWT
    │
    ▼
Criar Tarefas
    │
    ▼
Consultar Tarefas
```

---

# 👨‍💻 Autor

**Paulo Trindade**

Desenvolvedor Full Stack com foco em:

- Java + Spring Boot
- APIs REST
- React Native
- PostgreSQL
- Segurança com JWT
- Desenvolvimento Mobile

GitHub:
https://github.com/PauloR2021/Projeto_React_Expo.git

LinkedIn:
https://linkedin.com/in/paulo-ricardo-soares/

---

# 📄 Licença

Projeto desenvolvido para fins de estudo, aprendizado e demonstração de conhecimentos em desenvolvimento Full Stack.