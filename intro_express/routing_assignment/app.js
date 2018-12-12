var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// app.get("/speak/:animal", function (req, res){
//     var animal = req.params.animal;
//     var sound = "";
//     if(animal=== "pig"){
//         sound = "oink";
//     } else if(animal === "cow"){
//         sound = "moo";
//     }
//     res.send("The " + animal +  " says " + sound + "!");
// });

app.get("/speak/:animal", function (req, res){
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof",
        cat: "meow",
        goldfish: "glub"
    }

    var animal = req.params.animal.toLowerCase;
    var sound = sounds[animal];  
    
    res.send('The ' + animal +  ' says "' + sound + '"!');
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var repeated = "";

    for(var i = 0; i < times; i++){
       repeated += message + " ";
    }
    res.send(repeated);
});

app.get("*", function (req, res){
    res.send("Page not found.... try something else c:");
});

app.listen(1234, function(){
    console.log("Server has started!");
});