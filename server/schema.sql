CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  username CHAR(25) NOT NULL UNIQUE KEY
);

-- CREATE TABLE rooms (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
--   roomname CHAR(25) UNIQUE KEY
-- );

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  text CHAR(140) NOT NULL,
  roomname CHAR(25) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id)
  REFERENCES users (id) 
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

