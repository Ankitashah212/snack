### Schema

CREATE DATABASE snack_db;
USE snack_db;

CREATE TABLE snacks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	quantity tinyint DEFAULT 1, 
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
