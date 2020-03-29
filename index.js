const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
//pool is an object inside the pg package
const { Pool } = require('pg');
// for heroku
const PORT =  process.env.PORT || 7777;
// const PORT =  7777;
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: connectionString }); 
const topicController = require('./controllers/topicController.js');
const scriptureController = require('./controllers/scriptureController.js')

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json()) //super json encoded bodies
    .use(bodyParser.urlencoded({extended:true}))
    .set('views', path.join(__dirname, 'public'))
    .set('view engine', 'ejs')
    .get('/showGetMeal', (req, res)=>{
        res.render('views/getMeal');
        res.end();
    })
    .get('/getMeal', (req, res)=>{
        var id = req.query.id;
        console.log(id);
        pool.query(`SELECT * FROM meals WHERE id = ${id}`, (err,result)=>{
            if(err){
                return console.error(err);
            }else{
                    console.log('meals : ', JSON.stringify(result.rows[0]))
                    res.json(result.rows[0])
            }
    })
 
})
    .get("/addMeal", function(req, res){
        console.log('You are here!');
        res.render('views/addMeal');
        res.end();
    })
    .post('/addMeal', function addMeal(req, res){
        var meal = req.body.meal;
        var ingredient = req.body.ingredient;
        var day_of_week = req.body.day_of_week;
        var meal_of_day = req.body.meal_of_day;
        var sql = `INSERT INTO meals(meal, ingredients, day_of_week, meal_of_day, username) VALUES(${meal}, ${ingredient}, ${day_of_week}, ${meal_of_day})`;
        console.log(sql);
        pool.query(sql, (err, result)=>{
            if(err){
                console.log(err)
                
            }else{
                console.log('Sucess!');
            }
        });
        res.write('Posted!');
        res.end(); 
        console.log('it was posted!');
    })
    .get('', (req, res)=>{
        res.render('index');
        res.end();
    })
    .get("/topics", topicController.getTopicList)
    .get('/topic', topicController.getTopic)
    .post('/topic', topicController.postTopic)

    .get('/search', scriptureController.search)
    .get('/searchTopic', scriptureController.searchTopic)

    .listen(PORT,()=>{
        console.log('Listening on port: 7777');
    })

