// require packages

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;
// process.env.PORT || 

//sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var users

var users = [];

//Route that sends the user to the home page
app.get("/", function(req, res){

	res.sendFile(path.join(__dirname, "public/home.html"));

});

//route to send user to survey 
app.get("/survey", function(req, res){

	res.sendFile(path.join(__dirname, "public/survey.html"));

});

//route to send user to viewMatches.html

app.get("/view", function(req, res){

	res.sendFile(path.join(__dirname, "public/viewMatches.html"));

});

//route that sends data from survey form
app.post("/api/users", function(req, res){

	var newUserData = req.body;

	res.json(newUserData);

	users.push(newUserData);

});

app.get("/api/all-users", function(req, res){

	res.json(users);

});

app.get("/api/matches", function(req, res){

	res.json(users);

});



//server starts to listen
app.listen(PORT, function(){

console.log('App listening on PORT ' + PORT);

});

