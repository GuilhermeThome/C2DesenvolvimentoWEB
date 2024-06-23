# Use a imagem oficial do Node.js como base
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de configuração do package.json e yarn.lock
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Gera os arquivos do Prisma
RUN npx prisma generate

# Compila o TypeScript
RUN npx tsc

# Expõe a porta da aplicação
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["node", "dist/index.js"]
