# C2DesenvolvimentoWEB
# My API

Uma API criada com Node.js, TypeScript, Prisma e SQLite, seguindo o padrão MVC.

## Sumário

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Modelos](#modelos)
- [Rotas](#rotas)
- [Uso](#uso)
- [Licença](#licença)

  
## Instalação
Para começar, clone o repositório e instale as dependências:

git clone https://github.com/GuilhermeThome/C2DesenvolvimentoWEB
cd my-api
npm install


## Configuração

Configure o TypeScript e o Prisma:

npx prisma generate
npx prisma migrate dev --name init


# Modelos

## User

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  comments  Comment[]
}

## Post

model Post {
  id          Int       @id @default(autoincrement())
  title       String
  content     String?
  published   Boolean   @default(false)
  authorId    Int
  author      User      @relation(fields: [authorId], references: [id])
  comments    Comment[]
}

## Comment

model Comment {
  id        Int     @id @default(autoincrement())
  content   String
  postId    Int
  post      Post    @relation(fields: [postId], references: [id])
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}

## Rotas 

Users
GET /users - Retorna todos os usuários.
GET /users/:id - Retorna um usuário específico.
POST /users - Cria um novo usuário.
PUT /users/:id - Atualiza um usuário existente.
DELETE /users/:id - Deleta um usuário.

Posts
GET /posts - Retorna todos os posts.
GET /posts/:id - Retorna um post específico.
POST /posts - Cria um novo post.
PUT /posts/:id - Atualiza um post existente.
DELETE /posts/:id - Deleta um post.

Comments
GET /comments - Retorna todos os comentários.
GET /comments/:id - Retorna um comentário específico.
POST /comments - Cria um novo comentário.
PUT /comments/:id - Atualiza um comentário existente.
DELETE /comments/:id - Deleta um comentário.


## Uso
Para iniciar o servidor, execute:
npm run dev

