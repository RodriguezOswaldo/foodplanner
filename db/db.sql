CREATE TABLE meals(
    id SERIAL PRIMARY KEY NOT NULL,
    meal VARCHAR(100) NOT NULL UNIQUE,
    ingredients VARCHAR (600) NOT NULL ,
    day_of_week VARCHAR (40) NOT NULL,
    meal_of_day VARCHAR (40) NOT NULL,
    username VARCHAR (50) UNIQUE
);
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) REFERENCES meals(username),
    user_password VARCHAR(220) NOT NULL
);

CREATE TABLE meals_users(
    mealsId INT NOT NULL REFERENCES meals(id),
    usersId INT NOT NULL REFERENCES users(id)
);
DROP TABLE meals;
DROP TABLE users;
DROP TABLE meals_users;

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('burritos','seasoned ground beef, refried beans, shredded lettuce, diced tomatoes, sour cream', 'Monday','Dinner','Admin' );

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('beef stew','2 pounds stewing beef, vegetable oil, salt,onions,  potatoes,  carrots, 2 ribs celery', 'Tuesday','Dinner','Helena' );

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('Chicken Stew','Raw Chicken, Vegetables, Species, Potatoe', 'Wednesdy','Lunch','Ruth' );

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('Oriental Rice','Rice, Soy Sauce, Oil, Salt', 'Thursday','Dinner','Arthur' );

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('Sweet Potatoe Shouffle','Sweet Potatoes, Butter, Mashmellow, Powder Cinamon', 'Friday','Dinner','Luke' );


CREATE TABLE scripture(
    id SERIAL PRIMARY KEY NOT NULL,
    book VARCHAR(100) NOT NULL,
    chapter INT NOT NULL,
    verse INT NOT NULL,
    content VARCHAR (4000) NOT NULL
    );

INSERT INTO scripture(book, chapter, verse, content)
VALUES('Mosiah',16, 9,'He is the life and the light of the world.');

INSERT INTO scripture(book, chapter, verse, content)
VALUES('1 Nephi',1, 7,'I will go and I do');

INSERT INTO scripture(book, chapter, verse, content)
VALUES('Mosiah',16, 9,'He is the life and the light of the world.');

CREATE TABLE topic(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL
);

INSERT INTO topic(name) VALUES ('Faith');
INSERT INTO topic(name) VALUES ('Sacrifice');
INSERT INTO topic(name) VALUES ('Charity');

CREATE TABLE scripture_topic(
    scriptureId INT NOT NULL REFERENCES scripture(id),
    topicId INT NOT NULL REFERENCES topic(id)
);

/*Queries  */
 