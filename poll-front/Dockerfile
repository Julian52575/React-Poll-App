FROM node:23-bullseye-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]