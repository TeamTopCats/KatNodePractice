var express = require("express");
var app = express();

app.use(express.static("css"))
app.set("views", "ejs")
var images= [
    "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/06/cat-meme-97.jpg", 
    "https://i.chzbgr.com/full/9013910528/hAB49129F/", 
    "https://external-preview.redd.it/b_olAw89gX5sFLMYKN2AV_8pUn3QCIW94tl7FHeJSC0.jpg?auto=webp&s=a438e782e3b176d133bf3e7d618b097429c366c4", 
    "https://sayingimages.com/wp-content/uploads/an-asian-funny-cat-meme.jpg", 
    "https://purrfectlove.net/wp-content/uploads/2018/01/Suspect-Cat-Meme.jpeg", 
    "https://uproxx.files.wordpress.com/2012/11/sophcat-boat.jpg?quality=95", 
    "https://quotesnhumor.com/wp-content/uploads/2015/07/Top-30-Funny-Cat-Memes-Humor-jokes.jpg", 
    "https://upload.wikimedia.org/wikipedia/en/8/87/Keyboard_cat.jpg"
]

app.get("/", function(req, res){
    res.render("meme.ejs", {
        image: images[Math.floor(Math.random() * images.length)]
        
    });
});

app.get("/meme", function(req, res){
    res.json( {
        image: images[Math.floor(Math.random() * images.length)]
        
    });
});

app.listen(1111, function(){
    console.log("Go Check!!!");
});