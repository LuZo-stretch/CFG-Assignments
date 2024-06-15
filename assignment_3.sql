CREATE DATABASE cinema_club;
USE cinema_club;

CREATE TABLE movies
(movie_id INTEGER PRIMARY KEY,
title VARCHAR(50),
genre VARCHAR(15),
rating INTEGER);

CREATE TABLE cinemas
(cinema_id INTEGER PRIMARY KEY,
cinema_name VARCHAR(20),
area VARCHAR(20),
plushness INTEGER);

CREATE TABLE club_members
(member_id INTEGER PRIMARY KEY,
member_name VARCHAR(20),
member_email VARCHAR(20),
area VARCHAR(20));