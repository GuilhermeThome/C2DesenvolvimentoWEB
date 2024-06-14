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

```sh
git clone https://github.com/seu-usuario/my-api.git
cd my-api
npm install

## Configuração
Configure o TypeScript e o Prisma:

sh
Copiar código
npx prisma generate
npx prisma migrate dev --name init
Estrutura do Projeto
plaintext
Copiar código
my-api/
├── src/
│   ├── controllers/
│   │   ├── userController.ts
│   │   ├── postController.ts
│   │   └── commentController.ts
│   ├── models/
│   │   ├── userModel.ts
│   │   ├── postModel.ts
│   │   └── commentModel.ts
│   ├── routers/
│   │   ├── userRouter.ts
│   │   ├── postRouter.ts
│   │   └── commentRouter.ts
│   └── index.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tsconfig.json
├── package.json
└── .gitignore
Modelos
User
prisma
Copiar código
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  comments  Comment[]
}
Post
prisma
Copiar código
model Post {
  id          Int       @id @default(autoincrement())
  title       String
  content     String?
  published   Boolean   @default(false)
  authorId    Int
  author      User      @relation(fields: [authorId], references: [id])
  comments    Comment[]
}
Comment
prisma
Copiar código
model Comment {
  id        Int     @id @default(autoincrement())
  content   String
  postId    Int
  post      Post    @relation(fields: [postId], references: [id])
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
}
