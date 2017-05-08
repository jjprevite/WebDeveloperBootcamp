var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title and content
var postSchema = mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("post", postSchema);

// USER -email and name
var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("user", userSchema);



// var newUser = new User({
//     name: "Will",
//     email: "willlikestoclimb@gmail.com"
// });

// newUser.posts.push({
//     title: "how to climb really hard",
//     content: "So if you think you want to climb, think again. It's tough and hard. I'm going to teach you how to do it."
// })

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost = new Post({
//     title: "Hello Joe! You are doing great!",
//     content: "I wanted to let you know that you're coding along well and this has been great progress!"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

User.findOne({name: "Joe"}, function(err, user){
   if(err){
    //   console.log(err);
   } else {
       user.posts.push({
           title: "How to learn to code",
           content: "Take the WDB online!"
       },
       {
           title: "How to write associations",
           content: "Check out my code now!"
       })
       user.save(function(err, user){
           if(err){
               console.log(err);
           } else {
               console.log(user);
           }
       });
   }
});