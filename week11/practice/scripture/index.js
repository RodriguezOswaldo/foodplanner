    //touch and then file name to create a file from console
    const express = require('express');
    const path = require("path");
    const topicController = require('./controllers/topicController.js');
    const scriptureController = require('./controllers/scriptureController.js')

    const PORT = 7000;

    var app = express();

    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.json()); //super json encoded bodies
    app.use(express.urlencoded({extended: true}));//support url encoded bodies

    app.get("/topics", topicController.getTopicList);
    app.get('/topic', topicController.getTopic);
    app.post('/topic', topicController.postTopic);

    app.get('/search', scriptureController.search);
    app.get('/searchTopic', scriptureController.searchTopic);

    app.get('/scriptures', scriptureController.getScriptureList);
    app.get('/scripture', scriptureController.getScripture);
    app.post('/scripture', scriptureController.insertNewScripture);

    app.post('/assignTopicToScripture', scriptureController.assignTopicToScripture);
    
    app.listen(PORT, function(){
        console.log("Server listening on port " + PORT);
    });
   