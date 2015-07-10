var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('resources'));

app.get('/', function(req, res){
    var options = {root:"views"};
    res.sendFile('home.html',options);
});

app.listen(port,function(){
    console.log("Listening on port "+port)
});