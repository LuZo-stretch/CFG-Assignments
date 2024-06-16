CREATE DATABASE cinema_club;
USE cinema_club;

CREATE TABLE movies
(movie_id INTEGER PRIMARY KEY,
title VARCHAR(50) NOT NULL,
genre VARCHAR(15) NOT NULL,
rating INTEGER);

CREATE TABLE cinemas
(cinema_id INTEGER PRIMARY KEY,
cinema_name VARCHAR(20) NOT NULL,
area VARCHAR(20),
plushness INTEGER);

CREATE TABLE club_members
(member_id INTEGER PRIMARY KEY,
member_name VARCHAR(20) NOT NULL,
member_email VARCHAR(20) NOT NULL,
area VARCHAR(20));

CREATE TABLE shows
(cinema_id INTEGER,
movie_id INTEGER);
ALTER TABLE shows
ADD CONSTRAINT fk_cinema_id
FOREIGN KEY (cinema_id)
REFERENCES cinemas (cinema_id);

ALTER TABLE shows
ADD CONSTRAINT fk_movie_id
FOREIGN KEY (movie_id)
REFERENCES movies (movie_id);

INSERT INTO cinemas
(cinema_id, cinema_name, area, plushness)
VALUES
(1, 'Ritzy Brixton', 'Brixton', 3),
(2, 'Picture House WN', 'West Norwood', 4),
(3, 'Prince Charles', 'Soho', 3),
(4, 'Curzon Soho', 'Soho', 4),
(5, 'Fanzy cinema', 'Bethnal Green', 5),
(6, 'Creepy cinema', 'Greenwich', 2),
(7, 'Falling apart cinema', 'Greenwich', 1),
(8, 'Dating Spot', 'Bethnal Green', 5);