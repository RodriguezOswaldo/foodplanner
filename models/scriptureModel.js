function searchByBook(book, callback){
    console.log(`Searching the DB for book:${book} `);
    var results = {
        list:[{id:1, book:book, chapter:1, verse : 32, content : "test"},
              {id:2, book:book, chapter:1, verse : 32, content : "test"},
              {id:3, book:book , chapter:1, verse : 32, content : "test"}
        ]};
        callback(null, results);
};


function searchByTopic(topic, callback){
    console.log(`Searching the DB for topic: ${topic}`);
    var results = {
        list:[{id:1, topic:topic, something: 'else'},
              {id:2, topic:topic, something: 'else'},
              {id:3, topic:topic, something: 'else'}
        ]};
        callback(null, results);
};


function getAllScriptures(callback){
    var results = {
        list:[{id:1, book: 'Gen', chapter:1, verse : 32, content : "test"},
              {id:2, book: 'Nogen', chapter:1, verse : 32, content : "test"},
              {id:3, book: 'Sigen', chapter:1, verse : 32, content : "test"}
        ]};
    callback(null, results);
};

function getScriptureById(id, callback){
    var results = {list:{id:1, book: 'Gen', chapter:1, verse : 32, content : "test"}};
    callback(null, results);
};
function insertNewScripture(book, chapter, verse, content,callback){
    var results = {success:true, 
                   scripture:{id:1, book:book, chapter:chapter, verse:verse, content:content}};
    callback(null, results);
};

function assignTopicToScripture(topicId, scriptureId, callback){
    var results = {success:true};
    callback(null, results);
};

module.exports = {
    searchByBook: searchByBook,
    searchByTopic: searchByTopic,
    getAllScriptures: getAllScriptures,
    getScriptureById: getScriptureById,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
}