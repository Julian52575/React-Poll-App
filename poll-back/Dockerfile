FROM node:23-bullseye-slim

WORKDIR /app/

COPY . /app/

RUN npm prune --production

ENTRYPOINT [ "npm", "run", "start" ]