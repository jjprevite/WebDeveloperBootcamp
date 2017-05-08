var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elit mattis adipiscing. Fusce in hendrerit purus. Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris. Donec nisi libero, adipiscing id pretium eget, consectetur sit amet leo. Nam at eros quis mi egestas fringilla non nec purus."
    },
     {
        name: "Trucker Grounds",
        image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elit mattis adipiscing. Fusce in hendrerit purus. Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris. Donec nisi libero, adipiscing id pretium eget, consectetur sit amet leo. Nam at eros quis mi egestas fringilla non nec purus.!"
    },
     {
        name: "Tent City",
        image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed elit mattis adipiscing. Fusce in hendrerit purus. Suspendisse potenti. Proin quis eros odio, dapibus dictum mauris. Donec nisi libero, adipiscing id pretium eget, consectetur sit amet leo. Nam at eros quis mi egestas fringilla non nec purus."
    },
]

function seedDB(){
    //Remove all campgrounds
      Campground.remove({}, function(err){
      if(err){
          console.log(err);
      } else{
          console.log("Removed campgrounds");
          //add a few campgrounds
          data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added a campground!");
                    //add a comment
                    Comment.create(
                        {
                            text: "This place is great but it's WAY overpriced.",
                            author: "Homer"
                        }, function(err, comment){
                          if(err){
                              console.log(err);
                          } else{
                              campground.comments.push(comment);
                              campground.save();
                              console.log("Comment added!");
                          }
                        });
                }
            });
        });
      }
  });
}

module.exports = seedDB;
