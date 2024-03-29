DROP DATABASE IF EXISTS course_db2;
CREATE DATABASE course_db2;

USE course_db2;

CREATE TABLE courses (
  -- id INT NOT NULL, -- Primary key in needed why trying to auto increment
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
