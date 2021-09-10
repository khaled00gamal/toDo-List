
const express = require("express");
const bodyParser= require("body-parser");
const app = express();
const date= require(__dirname+"/date.js");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=[];
let workItems=[];
app.get("/",function(req,res){
    let day = date.getDate();
    res.render("list",{listTitle: day,newItems: items});
});


app.post("/",function (req,res) {

    let item = req.body.newItem;

    if(req.body.list === "work"){
       workItems.push(item); 
       res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work list",newItems:workItems}); 
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000,function() {
    console.log("server running on port 3000");
});

