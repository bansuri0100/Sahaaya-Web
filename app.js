var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  expressSanitizer = require("express-sanitizer"),
  methodOverride = require('method-override');
  firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDT2myBeHmKXKw3pxhOwEYeUwizAJx36cc",
  authDomain: "votergrievances-7d9b2.firebaseapp.com",
  databaseURL: "https://votergrievances-7d9b2.firebaseio.com",
  projectId: "votergrievances-7d9b2",
  storageBucket: "votergrievances-7d9b2.appspot.com",
  messagingSenderId: "3894403305",
  appId: "1:3894403305:web:1ff81288958ed95d741078",
  measurementId: "G-R5493VV2X7"
};

firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;
firebase.firestore().settings({ experimentalForceLongPolling: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride('_method'));
// const db = firebase.firestore().collection('Constituencies/YALAHANKA/BWSSBComplaints');
const db = firebase.firestore();

// app.get("/", function(req, res){
// db.get().then((querySnapshot) => {
//   res.render("landing.ejs", { querySnapshot: querySnapshot });
// });
// });

app.get("/", function (req, res) {
  res.render("constiselect.ejs");
});

app.post("/c", function (req, res) {
  console.log(req.body.constituency);
  res.render("catselect.ejs", { "constituency": req.body.constituency });
});

app.post("/c/:constituency/cat", function (req, res) {

  var path = 'Constituencies'+'/' + req.params.constituency + '/' + req.body.category + 'Complaints'+'/';
  console.log(path);
  firebase.firestore().collection(path).get()
  .then(querySnapshot => {
    res.render('grievances.ejs',{querySnapshot:querySnapshot});
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
 

});



// app.get("/b/:Constituency/:Category/:id", function(req, res){
//   var constituency = 'Constituencies'+'/'+req.params.Constituency+'/'+req.params.Category+'Complaints'+'/';
//   firebase.firestore().collection(constituency).doc(req.params.id).get().then((querySnapshot) => {
//   res.render("detailed.ejs",{querySnapshot:querySnapshot});
//   });
// });


app.listen(3000, function () {
  console.log('Sahaaya server started')

});

