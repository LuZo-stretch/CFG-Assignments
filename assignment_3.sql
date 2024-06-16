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
movie_id INTEGER,
show_time TIME);
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

INSERT INTO club_members
(member_id, member_name, member_email, area)
VALUES
(1, 'Lucia Galarza', 'lucia@gmailcom', 'Brixton'),
(2, 'Farolito Perez', 'farolito@gmail.com', 'Soho'),
(3, 'Lorna Jane', 'lorna@gmail.com', 'West Norwood'),
(4, 'Perico Palotes', 'perico@gmail.com', 'Greenwich'),
(5, 'Coco Galarza', 'coquito@gmail.com', 'Brixton'),
(6, 'Florence Galarza', 'florpi@gmail.com', 'Brixton'),
(7, 'Fulano Tal', 'fulanito@gmail.com', 'Bethnal Green'),
(8, 'Mengano Cual', 'menganito@gmailcom', 'Greenwich');

INSERT INTO movies
(movie_id, title, genre, rating)
VALUES
(1, 'Furiosa', 'action', 3),
(2, 'Fall Guy', 'comedy', 4),
(3, 'Arcadian', 'horror', 4),
(4, 'Star Trek III', 'scifi', 3),
(5, 'The Matrix', 'scifi', 5),
(6, 'Suzume', 'anime', 5),
(7, 'Scream', 'horror', 3),
(8, 'Hard Miles', 'drama', 1);

INSERT INTO shows
(cinema_id, movie_id, show_time)
VALUES
(1, 1, '18:30:00'),
(1, 2, '22:30:00'),
(1, 3, '21:00:00'),
(2, 2, '18:30:00'),
(2, 8, '21:00:00'),
(3, 6, '18:30:00'),
(4, 7, '18:30:00'),
(4, 6, '21:00:00'),
(5, 4, '18:30:00'),
(6, 5, '18:30:00'),
(6, 3, '21:00:00'),
(7, 1, '18:30:00'),
(7, 3, '21:00:00'),
(8, 4, '18:30:00'),
(8, 7, '21:30:00'),
(8, 6, '22:00:00');

SELECT * FROM shows;

ALTER TABLE club_members
ADD CONSTRAINT unique_member_email UNIQUE (member_email);

INSERT INTO club_members
(member_id, member_name, member_email)
VALUES
(9, 'Paco Escobar', 'paquito@gmail.com');

SELECT * FROM club_members;

SELECT cinema_id, cinema_name FROM cinemas
WHERE area = 'Brixton';

SELECT member_id, member_name, member_email FROM club_members
WHERE area = 'Brixton';

SELECT movie_id, title, rating FROM movies
WHERE rating > 3 
ORDER BY rating DESC;

SELECT movie_id, title, rating FROM movies
WHERE genre = 'scifi';