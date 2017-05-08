var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/posts.js"),
    User = require("./models/users.js");

// User.create({
//     name: "Bobby",
//     email: "bobbylikesemail@gmail.com"
// })

Post.create({
    title: "How to cook tacos and fries",
    content: "make sure you get some guac and you get some veggie meat or real meat."
    }, function(err, post){
        User.findOne({name: "Bobby"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        })
        
    });


//find user
//find all posts from that user
// User.findOne({name: "Bobby"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });