FROM node:alpine

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "node", "app.mjs" ]