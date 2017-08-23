const express = require('express'),
      app=express();
      data =require('./data');
      bodyParser = require('body-parser');
      bc = require('./book_controller.js');



app.use(bodyParser.json());

app.post("/api/addBook",bc.post);

app.put("/api/updateBooki/:id",bc.put);



app.get("/api/getBooks",bc.get);




app.listen(3000,()=>console.log("listening"));

