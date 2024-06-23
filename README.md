# Projeto Prático da C2: API com NodeJS, Typescript, Prisma e Express
# Minha API

Uma API criada com Node.js, TypeScript, Prisma e SQLite, seguindo o padrão MVC.

## Sumário

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Modelos](#modelos)
- [Rotas](#rotas)
- [Uso](#uso)
- [Docker](#docker)
  
## Instalação
Para começar, clone o repositório e instale as dependências:

git clone https://github.com/GuilhermeThome/C2DesenvolvimentoWEB.git <br>
cd my-api <br>
npm install

dependências necessárias para trabalhar com JWT: <br>
npm install jsonwebtoken bcryptjs <br>
npm install --save-dev @types/jsonwebtoken @types/bcryptjs <br>

## Configuração

Configure o TypeScript e o Prisma:

npx prisma generate <br>
npx prisma migrate dev --name add_password_to_user


# Modelos

## User

model User { <br>
  id_________________Int__________@id @default(autoincrement()) <br>
  email____________String_________@unique <br>
  name_____________String? <br>
  posts____________Post[] <br>
  comments________Comment[] <br>
} <br>

## Post

model Post { <br>
  id__________________Int______________@id @default(autoincrement()) <br>
  title_____________String <br>
  content___________String? <br>
  published_________Boolean____________@default(false) <br>
  authorId____________Int <br>
  author_____________User______________@relation(fields: [authorId], references: [id]) <br>
  comments_________Comment[] <br>
} <br>

## Comment

model Comment { <br>
  id__________________Int_____________@id @default(autoincrement()) <br>
  content____________String <br>
  postId______________Int <br>
  post________________Post____________@relation(fields: [postId], references: [id]) <br>
  authorId____________Int <br>
  author______________User____________@relation(fields: [authorId], references: [id]) <br>
} <br> 

## Rotas 

Users
- GET /users - Retorna todos os usuários.
- GET /users/:id - Retorna um usuário específico.
- POST /users - Cria um novo usuário.
- PUT /users/:id - Atualiza um usuário existente.
- DELETE /users/:id - Deleta um usuário.

Posts
- GET /posts - Retorna todos os posts.
- GET /posts/:id - Retorna um post específico.
- POST /posts - Cria um novo post.
- PUT /posts/:id - Atualiza um post existente.
- DELETE /posts/:id - Deleta um post.

Comments
- GET /comments - Retorna todos os comentários.
- GET /comments/:id - Retorna um comentário específico.
- POST /comments - Cria um novo comentário.
- PUT /comments/:id - Atualiza um comentário existente.
- DELETE /comments/:id - Deleta um comentário.

## Uso
Para iniciar o servidor, execute:
npm run dev

## Docker
Se preferir, você pode executar a API em um contêiner Docker. Certifique-se de ter o Docker instalado. Para construir e executar a imagem Docker da API, siga os passos abaixo:<br>

CONSTRUINDO UMA IMAGEM DOCKER: <br>
docker build -t my-api . <br>

EXECUTANDO O CONTÂINER DOCKER: <br>
docker run -p 3000:3000 my-api <br>

A API estará acessível em http://localhost:3000.
