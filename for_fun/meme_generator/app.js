var express = require("express");
var crawler = require('./crawler.js');
var app = express();

app.use(express.static("css"))
app.set("views", "ejs")

app.get("/", function(req, res){
    crawler.cheezburgerCrawl().then((data)=>{
        res.render("meme.ejs", {
            image: data
        });
    }).catch((error)=>{
        console.log('crawl error', error);
        res.json(500, 'oh noes :c');
    })
});

app.get("/meme", function(req, res){
    crawler.cheezburgerCrawl().then((data)=>{
        res.json( {
            image: data
        });
    }).catch((error)=>{
        console.log('crawl error', error);
        res.json(500, 'oh noes :c');
    }) 
});

app.listen(1111, function(){
    console.log("Go Check!!!");
});

