var express = require("express"),
	app     = express(),
	bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require('method-override');
    firebase       = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCNZndwz8aXRdN92d2as9FCfpgULFRRBnY",
    authDomain: "sahaaya-web.firebaseapp.com",
    databaseURL: "https://sahaaya-web.firebaseio.com",
    projectId: "sahaaya-web",
    storageBucket: "sahaaya-web.appspot.com",
    messagingSenderId: "735375190081",
    appId: "1:735375190081:web:628a4e62c1c8aa6efc3ec0",
        measurementId: "G-YC4G07M5MW"
    };
    
    
firebase.initializeApp(firebaseConfig);  
firebase.auth.Auth.Persistence.LOCAL;

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));//telling it to look inside public direc where custom stylesheet
app.use(methodOverride('_method'));


app.get("/",(req,res) => res.render("landing.ejs")
);


app.listen(3000,function(){
    console.log('Sahaaya server started')  
   
 });
 
 