//Express app using omdb (open movie database) API request excercise

var express = require("express");
var app = express();

var request = require("request");
// app.set ("view engine", "ejs");
app.set("views", "ejs")

app.get("/", function(req, res){

  res.render("search.ejs");
});

app.get("/results", function(req, res){
    
    //Search is defined on search.ejs
    var query = req.query.search;
    //Dynamic URL
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
    
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            
            var data = JSON.parse(body);
            res.render("results.ejs", {
                data: data
            });
        }
    });
});



app.listen(2000, function(){
    console.log("Movie App Has Started!!!");
});

//http://www.omdbapi.com/?i=tt3896198&apikey=thewdb