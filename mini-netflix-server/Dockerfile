FROM node

WORKDIR mkdir -p /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD npm start