var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperamant: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name: "Mrs. Noris",
//   age: 7,
//   temperamant: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("UH OH JOE..");
//     } else {
//         console.log("CAT WAS SAVED TO THE DATABASE GOOD SIR");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperamant: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
}
);


Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO! ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS!");
        console.log(cats);
    }
})