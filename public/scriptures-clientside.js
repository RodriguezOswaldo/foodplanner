

function searchByBook(){
    console.log('you are searching by book Bro!!');
    //selecting the value added by the user in the book input
    var book = $("#book").val();
    console.log(`Book: ${book}`);

    //calling the Search get method from the server 
    $.get("/search",{book:book}, function(data) {
        console.log("Back from the server with: ");
        console.log(data);
        //looping the array of data that comes from the server
        for(let i =0; i <data.list.length; i++){
            var scripture = data.list[i];
            // console.log(scripture);
            $('#ulScriptures').append(`<li>${scripture.book}, ${scripture.chapter}, ${scripture.verse}, ${scripture.content}</li>`);
        }
    })
}
function searchByTopic(){
    console.log('you are searching by topic here bro!!');
       //selecting the value added by the user in the topic input
       var topic = $("#topic").val();
       console.log(`Topic: ${topic}`);
   
       //calling the Search get method from the server 
       $.get("/searchTopic",{topic:topic}, function(data) {
           console.log("Back from the server with: ");
           console.log(data);

           //looping the array of data that comes from the server
           for(let i =0; i <data.list.length; i++){
               var topic = data.list[i];
               console.log(topic);
               $('#ulScriptures').append(`<li>${topic.topic}, ${topic.something}</li>`);
           }

       })
}