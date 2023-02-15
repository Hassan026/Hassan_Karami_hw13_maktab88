const express = require("express");
const app = express();
const path = require("path");
app.get("/home",function(req,res){
  res.sendFile(path.join(__dirname,"./views/index.html"))
});
app.get("/picture",function(req,res){
  res.sendFile(path.join(__dirname,"/assets/apple.png"))
})

app.listen(4000);