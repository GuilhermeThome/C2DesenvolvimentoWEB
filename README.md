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


## Configuração
Configure o TypeScript e o Prisma:

sh
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


## Instalação

Para começar, clone o repositório e instale as dependências:

```sh
git clone https://github.com/GuilhermeThome/C2DesenvolvimentoWEB
cd my-api
npm install
