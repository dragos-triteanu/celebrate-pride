var express = require("express");
var app = express();
var port = 80;

app.use(express.static('resources'));

app.get('/', function(req, res){
    res.sendfile('views/home.html');
});

app.listen(port,function(){
    console.log("Listening on port "+port)
});