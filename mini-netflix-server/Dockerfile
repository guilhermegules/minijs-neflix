FROM node:alpine

ENV SERVER 3333

EXPOSE 3333

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

CMD node dist/server/server.js