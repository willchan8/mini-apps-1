DROP DATABASE IF EXISTS mydatabase;

CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE userdata (
  id INT AUTO_INCREMENT UNIQUE,
  name VARCHAR (255),
  email VARCHAR (255),
  password VARCHAR (255)
);

INSERT INTO userdata (name, email, password) VALUES ("Will", 'will@gmail.com', 'password1');