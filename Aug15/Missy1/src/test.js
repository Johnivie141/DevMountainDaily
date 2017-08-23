const express =require('express');
const app =express();

app.get('/user/:id', function (req, res, next) {
 console.log("phase 0 user id " + req.params.id); 
 if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.send("phase 1");
})

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.send("phase 2");
})

app.listen(3001,()=>console.log("listen"));



