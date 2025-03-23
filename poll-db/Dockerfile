FROM mysql:9.2

WORKDIR /docker-entrypoint-initdb.d/

COPY . .

RUN test -f ./init.sql