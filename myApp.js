let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";

app.use(express.static(__dirname+"/public"))
// app.get("/", (req, res)=>{
//     res.send("Hello Express")
// })

app.get("/", (req, res)=>{
    res.sendFile(absolutePath)
})

app.get('/json',(req, res)=>{
  res.json({"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello Json"})
})
console.log("Hello World");




































 module.exports = app;
