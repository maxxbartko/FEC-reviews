CREATE DATABASE IF NOT EXISTS etsycutioner;

USE etsycutioner;

CREATE TABLE people (
  id INT NOT NULL,
  name TEXT NOT NULL,
  photo TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE shops (
  id INT NOT NULL,
  name TEXT NOT NULL,
  review_count MEDIUMINT,
  avg_stars TINYINT,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id INT NOT NULL,
  name TEXT NOT NULL,
  photo TEXT,
  shop INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (shop) REFERENCES shops(id)
);

CREATE TABLE reviews (
  id INT NOT NULL,
  person INT NOT NULL,
  shop INT NOT NULL,
  listing INT NOT NULL,
  body TEXT NOT NULL,
  date DATE NOT NULL,
  stars TINYINT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (person) REFERENCES people(id),
  FOREIGN KEY (shop) REFERENCES shops(id),
  FOREIGN KEY (listing) REFERENCES listings(id)
);