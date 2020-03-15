const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//pool is an object inside the pg package
const { Pool } = require('pg');
require('dotenv').config();
const PORT =  7777;
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: connectionString }); 

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({extended:true}))
    .get('/getMeal', (req, res)=>{
        var id = req.query.id;
        var meals;
        pool.query(`SELECT * FROM meals WHERE id = ${id}`, (err,result)=>{
            if(err){
                return console.error(err);
            }else{
                    console.log('meals : ', JSON.stringify(result.rows[0]))
                    res.json(result.rows[0])
            }



            // if(rows.lenght > 0){
            //     meals = rows.rows;
            //     console.log(meals);
            // }else{
            //     meals = null;
            //     console.log(meals);
            // }

                // for(i=0; i < rows.lenght; i++){
                // }
    })
})

    .listen(PORT,()=>{
        console.log('Listening on port: 7777');
    })