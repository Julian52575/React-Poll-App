FROM node:23-bullseye-slim

WORKDIR /app

COPY package*.json .

RUN npm install && npm install --save-dev dotenv

COPY . .

ENTRYPOINT [ "npm", "start" ]