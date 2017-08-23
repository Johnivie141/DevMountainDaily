var express = require('express');
var app = express();

app.listen(3000);





app.get("/", function(request,response){
console.log("I am listening");
response.end();
});



