///npm install --save express-session session-file-store morgan
//npm i --save express
// npm i --save body-parser
// npm i --save pg


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const session = require('express-session');


express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(require('morgan')('dev'))
     .use(session({
        name: 'server-session-cookie-id',
        secret: 'my express secret',
    }))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    .post('/login', (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        console.log(username, password);
        if(username == 'admin' && password == 'password'){
            req.session.username = username;
            res.json({success:true})
        }else{
            res.json({success:false})
        }
    )}
    .listen(PORT, ()=>console.log(`Listening on Port ${PORT}`))

    
    // .post('/logout', (req, res) => {
    //     if(req.session.username)
    // })
    // .get('/getServerTime', (req, res) => {})