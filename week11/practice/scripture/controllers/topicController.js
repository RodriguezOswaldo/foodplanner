//controller deals with response and user requests 
//sending the request to the model
//who will ultimately bring it from the db and eventually 
//send it back to the client

const topicModel = require('../models/topicModel.js');

function getTopicList(req, res){
    console.log(`Getting all the topics`);
 topicModel.getAllTopics(function(error, results){
     res.json(results);
 });
}

function getTopic(req, res){

    var id = req.query.id;

    console.log('Getting topic with id: ' + id);

    topicModel.getTopicById(id, function(error, results){
        res.json(results);
    });

}

function postTopic(req, res){
    var name = req.body.name;
    console.log(`Creating a new topic with name: ${name} `);
    topicModel.insertNewTopic(name, function(error, results){
        res.json(results);
    });
}

//bringig the controllers to the scope
module.exports = {
    getTopicList : getTopicList,
    getTopic: getTopic,
    postTopic: postTopic
};