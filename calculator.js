const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
  var n1 = Number(req.body.num1) ;
  var n2 = Number(req.body.num2) ;
  var n3 = n1 + n2;
  res.send("The result is :"+n3)
});

app.listen(3000,function(){
    console.log("Server is started at our end :");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/Bmicalculator.html")
});
app.post("/bmicalculator",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var BMI = Math.round(Math.floor(weight/(height*height),3));

    res.send("Your BMI is "+BMI);
})
