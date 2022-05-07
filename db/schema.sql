DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id INT,
    movie_id INT,
    reviews TEXT,
    FOREIGN KEY (movies)
    REFERENCES movies(id)
    ON DELETE SET NULL
);