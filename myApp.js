let express = require('express');
let app = express();
require('dotenv').config()
let absolutePath = __dirname + "/views/index.html";

app.use("/public",express.static(__dirname+"/public"))
// app.get("/", (req, res)=>{
//     res.send("Hello Express")
// })

app.get("/", (req, res)=>{
    res.sendFile(absolutePath)
})

app.get("/json",(req, res)=>{
  var responsetext = {"message":"Hello json"};
  if(process.env.MESSAGE_STYLE == "uppercase"){
    responsetext.message = responsetext.message.toUpperCase()
  }
  res.json(responsetext)
  console.log(responsetext)
})
console.log("Hello World");




































 module.exports = app;
