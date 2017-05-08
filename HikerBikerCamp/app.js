var express      = require("express"),
    bodyParser   = require("body-parser"),
    app          = express (),
    mongoose     = require("mongoose"),
    flash        = require("connect-flash"),
    passport     = require("passport"),
    LocalStrategy= require("passport-local"),
    Campground   = require("./models/campground"),
    methodOverride= require("method-override"),
    Comment      = require("./models/comment"),
    User         = require("./models/user"),
    seedDB       = require("./seeds");
    
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes       = require("./routes/index");

mongoose.connect("mongodb://localhost/hiker_biker_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// seedDB(); //seed the database
app.locals.moment = require("moment");
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "I love the color red",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

//requiring routes
app.use("/campgrounds/:id/comments", commentRoutes);
app.use(authRoutes);
app.use("/campgrounds", campgroundRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("HikerBikerCamp Server has started! <(^v^)>");
});