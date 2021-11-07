# expressHW2

<!-- 
INSERT INTO ingredient(id, name, sandwich_id) VALUES (1, 'Blue Cheese', 1);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (2, 'Buffalo Sauce', 1);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (3, 'Liverwurst', 2);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (4, 'Mustard', 2);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (5, 'Turkey', 3);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (6, 'Bacon', 3);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (7, 'Mayonnaise', 3);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (8, 'Onion', 4);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (9, 'Chicken', 5);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (10, 'Lettuce', 5);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (11, 'Tomato', 5);
INSERT INTO ingredient(id, name, sandwich_id) VALUES (12, 'Bread', 6);



CREATE TABLE ingredient(
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  sandwich_id INTEGER REFERENCES sandwich(id)
);



DROP TABLE if exists ingredients; -->