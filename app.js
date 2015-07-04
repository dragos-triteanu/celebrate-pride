var express = require("express");
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var path = require('path');

var port = 3000;

app.use(express.static('resources'));


app.get('/', function(req, res){
    res.sendfile('views/home.html');
});


app.listen(port,function(){
    console.log("Listening on port "+port)
});