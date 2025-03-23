FROM node:23-bullseye-slim

WORKDIR /app/

# install wget for healthcheck tests
RUN apt-get update && apt-get install -y wget

COPY . .

EXPOSE "${MYSQL_PORT}"

#RUN npm prune --production

HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 \
    CMD ["CMD", "wget", "--spider", "-q", "localhost:${API_PORT}/api"]

ENTRYPOINT [ "npm", "run", "start" ]