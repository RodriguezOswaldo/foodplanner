//controller deals with response and user requests
const scriptureModel = require('../models/scriptureModel.js')

function search(req, res){
    var book = req.query.book;
    scriptureModel.searchByBook(book, function(error, results){
        res.json(results)
    });

};

function searchTopic(req, res){
    var topic = req.query.topic;
    scriptureModel.searchByTopic(topic, function(error, results){
        res.json(results)
    });
    
}

function getScriptureList(req, res){
    scriptureModel.getAllScriptures(function(error, results){
        res.json(results)
    });
    
};
function getScripture(req, res){
    var id= 1;
            scriptureModel.getScriptureById(function(error, results){
                res.json(results)
            });
};
function insertNewScripture(req, res){
    var book = "John";
    var chapter = 3;
    var verse = 16;
    var content = "For God so Loved";
    scriptureModel.insertNewScripture(book, chapter, verse, content, function(error, results){
        res.json(results)
    });
};
function assignTopicToScripture(req, res){
    var topicId = 1;
    var scriptureId = 1;
    scriptureModel.assignTopicToScripture(topicId, scriptureId, function(error, results){
        res.json(results);
    })
};

module.exports = {
    search: search,
    searchTopic:searchTopic,
    getScriptureList: getScriptureList,
    getScripture: getScripture,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
}