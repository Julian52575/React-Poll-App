CREATE DATABASE IF NOT EXISTS poll;
use poll;

CREATE TABLE IF NOT EXISTS users
(
    id bigint PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255)
);

CREATE TABLE IF NOT EXISTS polls
(
    id bigint PRIMARY KEY AUTO_INCREMENT,
    owner bigint NOT NULL,

    FOREIGN KEY (owner) REFERENCES users(id)
);