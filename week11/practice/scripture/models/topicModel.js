//model works with the db
function getAllTopics(callback){
    //Get allTopics From the db
    var results = {
        topics:[
            {id:1, name:"faith"},
            {id:2, name:"hope"},
            {id:3, name:"charity"}
        ]
    }
    callback(null, results);
}

function getTopicById(id, callback){

    var results = {id:id, name: "A New Hope"};
    callback(null, results);
}

function insertNewTopic(name, callback){
    //Create the new topic 
    var results = {success: true}
    callback(null, results);
}

module.exports = {
    getAllTopics: getAllTopics,
    getTopicById: getTopicById,
    insertNewTopic: insertNewTopic
};