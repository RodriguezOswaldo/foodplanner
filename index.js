const express = require('express');
const session = require('express-session');
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
const scriptureController = require('./controllers/scriptureController.js');
const Queryset = require('./models/querys.js');
var sess;

const auth = (req, res, next) => {
    console.log('you are in the auth!')
    if (req.session.username) {
        res.locals.loggedIn = true;
        return next();
    }
    else
        return res.render('views/404');
};

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json()) //super json encoded bodies
    .use(bodyParser.urlencoded({extended:true}))
    .use(session({secret: 'muahahaha', saveUninitialized:true, resave:true}))
    .set('views', path.join(__dirname, 'public'))

    .set('view engine', 'ejs')
    .get('', (req, res)=>{
        sess=req.session;
        res.render('index');
        res.end();
    })
    .get('/showGetMeal', auth,(req, res)=>{
        res.render('views/getMeal');
        res.end();
    })
    .get('/getMeal', auth,(req, res)=>{
        // var id = req.query.id;
        var day_of_week = req.query.day_of_week;
        console.log(day_of_week);
        const queryset = new Queryset('meals', res).filter({
            day_of_week: day_of_week
        });
    })
    .get("/addMeal", auth, function(req, res){
        console.log('You are here!');
        res.render('views/addMeal');
        res.end();
    })
    .get('/details' ,auth,  (req, res)=>{
        var data = req.body;
        res.render('views/details', {meal : data.meal});
        res.end();
    })
    .post('/signUp', (req, res)=>{
        var username = req.body.username;
        var user_password = req.body.user_password;

        console.log(username, user_password);
        if (username.length > 0) {
            req.session.username = username;
            res.locals.loggedIn = true;
            res.render('views/page');
        } else {
            res.render('views/page');
        }
        res.end();
    })
    .get('/signUp', (req, res)=>{
        res.render('views/page');
        res.end();
    })
    .post('/addMeal', auth, function addMeal(req, res){
        var meal = req.body.meal;
        var ingredient = req.body.ingredient;
        var day_of_week = req.body.day_of_week;
        var meal_of_day = req.body.meal_of_day;
        var sql = `INSERT INTO meals (meal, ingredients, day_of_week, meal_of_day) VALUES ('${meal}', '${ingredient}', '${day_of_week}', '${meal_of_day}')`;
        console.log(sql);
        pool.query(sql, (err, result)=>{
            if(err){
                console.log(err)
                
            }else{
                console.log('Sucess!');
            }
        });
        res.render('views/getMeal');
        res.end();
        console.log('it was posted!');
    })
    .listen(PORT,()=>{
        console.log('Listening on port: 7777');
    })