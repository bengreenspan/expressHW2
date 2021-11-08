const pg = require('pg');

const client = new pg.Client('postgres://localhost/sandwichdb2');



const syncAndSeed = async() => {
const SQL = `

DROP TABLE IF EXISTS Ingred;
DROP TABLE IF EXISTS Sandwich;

CREATE TABLE Sandwich (
id INTEGER PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE Ingred(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    Sandwich_id INTEGER REFERENCES Sandwich (id)
    );

INSERT INTO Sandwich(id, name)VALUES(1, 'Buffalo Chicken Sandwich');
INSERT INTO Sandwich(id, name)VALUES(2, 'Liverwurst Sandwich');
INSERT INTO Sandwich(id, name)VALUES(3, 'Turkey Club');
INSERT INTO Ingred(id, name, sandwich_id) VALUES (1, 'Blue Cheese', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (2, 'Buffalo Sauce', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (3, 'Liverwurst', 2);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (4, 'Mustard', 2);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (5, 'Turkey', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (6, 'Bacon', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (7, 'Mayonnaise', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (8, 'Onion', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (9, 'Onion', 2);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (10, 'Chicken', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (11, 'Chicken', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (12, 'Lettuce', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (13, 'Lettuce', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (14, 'Tomato', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (15, 'Tomato', 3);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (16, 'Bread', 1);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (17, 'Bread', 2);
INSERT INTO Ingred(id, name, sandwich_id) VALUES (18, 'Bread', 3);

`;


await client.query(SQL)
;};

module.exports = {
    client,
    syncAndSeed
};

