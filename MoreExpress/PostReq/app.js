var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var friendsData = ["Naran", "Andy", "Mark", "Jordan", "Rob"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addFriend", function(req, res){
    var newFriend = req.body.newFriend;
    friendsData.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friendsData});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started!"); 
});