var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function (req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function (req, res){
    res.send("MEOW!");
});

// /r/anything...
app.get("/r/:subredditName", function (req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the" + subreddit.toUpperCase() +  "subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res){
    res.send("Welcome to the comments page!");
});

// "GIBBERISH" => "YOU ARE A STAR!!!"
app.get("*", function (req, res){
    res.send("YOU ARE A STAR!!!");
});

//Tell Express to listen for requests (start server)
app.listen(666, function(){
    console.log("Server has started!");
});