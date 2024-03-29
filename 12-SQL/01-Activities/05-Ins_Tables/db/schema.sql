DROP DATABASE IF EXISTS inventory_db2;
-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db2;

-- Makes it so all of the following code will affect inventory_db --
USE inventory_db2;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);
-- we an alway run multiple version of sql 
