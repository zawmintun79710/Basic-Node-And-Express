let express = require('express');
let app = express();
require('dotenv').config()
let absolutePath = __dirname + "/views/index.html";

app.use("/public",express.static(__dirname+"/public"))

app.use((req, res, next) => {
  let method = req.method;
  let path = req.path;
  let ip = req.ip;
  console.log(method+" "+ path+" - "+ip)
  next();
})
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

function getCurrentTime(){
  return new Date().toString()
}
app.get("/now", (req, res, next)=>{
  req.time = getCurrentTime();
  next();
}, (req, res)=>{
  res.json({time:req.time})
})

console.log("Hello World");




































 module.exports = app;
