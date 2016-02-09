var express = require('express');
var mongoose = require('mongoose');
var bParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/note-app');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/app', express.static(__dirname + '/app'));

// req = request, res = response
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen('3000', function(){
    console.log("Listening for Localhost:3000");
});
