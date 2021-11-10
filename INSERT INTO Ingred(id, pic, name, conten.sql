INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (1, blue, 'Blue Cheese', "Moldy and delicious. Blue Cheese crumbles or dressing acceptable.", "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (2, sauc, 'Buffalo Sauce', "Should be cayenne pepper based. Preferrably Frank's Red Hot ", "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (3, live, 'Liverwurst', "An acquired taste. High in sodium.", "Cannot have a <a href='/2'>Liverwust Sandwich</a> without it", 2);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (4, must, 'Mustard', "Yellow, Grainey, or maybe even Dijon.", "Found in <a href='/2'>Club Sandwiches</a>", 2);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (5, turk, 'Turkey', "Your yearly dose of tryptophan.", "Found in the <a href='/2'>Club Sandwich</a>", 3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (6, baco, 'Bacon', "One of the many delicious uses of pig." , "Sometimes found in <a href='/3'>Club Sandwiches</a>", 3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (7, mayo, 'Mayonnaise', "Honestly have no clue what this one is. I think egg yokes are involved? ", "Found in the <a href='/2'>Liverwurst Sandwich</a>", 3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (8, onio, 'Onion', "Despite them tasting and looking nothing alike, onions are sometimes confused with ogres.", "Found in <a href='/1'>Liverwurst Sandwiches</a> and sometimes <a href='/buff'>Buffalo Chicken Sandwiches</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (9, onio, 'Onion', "Despite them tasting and looking nothing alike, onions are sometimes confused with ogres.", "Found in <a href='/1'>Liverwurst Sandwiches</a> and sometimes <a href='/buff'>Buffalo Chicken Sandwiches</a>", 2);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (10, chic, 'Chicken', "Breaded, Grilled or People who scare easily.", "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a> and sometimes found in <a href='/2'>Club Sandwiches</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (11, chic, 'Chicken', "Breaded, Grilled or People who scare easily.", "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a> and sometimes found in <a href='/2'>Club Sandwiches</a>", 3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (12, lett, 'Lettuce', "Get some greens on your sandwich!" , "Found in <a href='/1'>Buffalo Chicken Sandwiches</a> and <a href='/club'>Club Sandwiches</a>",  1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (13, lett, 'Lettuce', "Get some greens on your sandwich!" , "Found in <a href='/1'>Buffalo Chicken Sandwiches</a> and <a href='/club'>Club Sandwiches</a>",  3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (14, toma, 'Tomato', "I think its a fruit.", "Found in <a href='/1'>Buffalo Chicken</a> and <a href='/2'>Club Sandwiches</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (15, toma, 'Tomato', "I think its a fruit.", "Found in <a href='/1'>Buffalo Chicken</a> and <a href='/2'>Club Sandwiches</a>",  3);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (16, brea, 'Bread', "Carbs! ", "Found in all <a href='/'>sandwiches</a>", 1);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (17, brea, 'Bread', "Carbs!", "Found in all <a href='/'>sandwiches</a>", 2);
INSERT INTO Ingred(id, pic, name, content, ingredients, sandwich_id) VALUES (18, brea, 'Bread', "Carbs!", "Found in all <a href='/'>sandwiches</a>", 3);



CREATE TABLE Ingred(
    id INTEGER PRIMARY KEY,
    pic VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    ingredients VARCHAR (1000) NOT NULL,
    Sandwich_id INTEGER REFERENCES Sandwich (id)
    );


    DROP TABLE IF EXISTS Ingred;


    INSERT INTO Sandwich(id, pic, name, content, ingredients) VALUES(2, liverSand, "The Liverwurst Sandwich", "Saucisse de foie de porc. Find it at McSorley's or Schaller & Weber. For sophisticated palates only. I think.</h2>", "Ingredients: <a href='/6'>Bread</a> <a href='/10'>Liverwurst</a> <a href='/13'>Onion</a> <a href='/12'>Mustard</a>");
INSERT INTO Sandwich(id, pic, name, content, ingredients) VALUES(3, clubSand, "The Turkey Club", "Some people opine that Club is an acronym for <a href='/8'>Chicken</a>, <a href='/9'>Lettuce</a> Under <a href='/6'>Bread</a>", "Ingredients: <a href='/6'>Bread</a> <a href='/15'>Turkey</a> <a href='/4'>Bacon</a> <a href='/9'>Lettuce</a> <a href='/14'>Tomato</a> <a href='/11'>Mayonnaise</a>");


content, ingredients