let data = require('./data.js');
module.exports={
get: (req,res,next)=>{
res.send(data);
res.end();
},

post:(req,res,next)=>{
console.log(req.body);

data.push(req.body);
res.status(200).send(data);
 
res.end();

},
put:(req,res) =>{
data[req.params.index].name = req.params.name;
res.status(200).send(data);

res.end();
},
delete : (req,res)=>{
data.splice(req.params.index,1);
res.status(200).send(data);
}
}
