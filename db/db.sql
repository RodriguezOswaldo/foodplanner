CREATE TABLE meals(
    id SERIAL PRIMARY KEY NOT NULL,
    meal VARCHAR(100) NOT NULL UNIQUE,
    ingredients VARCHAR (600) NOT NULL UNIQUE,
    day_of_week VARCHAR (40) NOT NULL UNIQUE,
    meal_of_day VARCHAR (40) NOT NULL,
    username VARCHAR (50) NOT NULL UNIQUE
);
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) REFERENCES foodplanners(username),
    user_password VARCHAR(220) NOT NULL
);

DROP TABLE foodplanners;
DROP TABLE users;

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('burritos','seasoned ground beef, refried beans, shredded lettuce, diced tomatoes, sour cream', 'Monday','Dinner','Admin' );

INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username)
VALUES('beef stew','2 pounds stewing beef, vegetable oil, salt,onions,  potatoes,  carrots, 2 ribs celery', 'Tuesday','Dinner','Helena' );
