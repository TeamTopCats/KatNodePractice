//Condesnsed Version:

// var request = require("request");
// request("http://www.google.com", function(error, response, body){
//     if (!error && response.statusCode == 200){
//         //Show html for google homepage
//         console.log(body);
//     }
// });



var request = require("request");
request("http://www.google.com", function(error, response, body){
    if (error){
        console.log(error);
    }else{
        if(response.statusCode == 200){
            //Things Worked!
            console.log(body)
        }
    }
});