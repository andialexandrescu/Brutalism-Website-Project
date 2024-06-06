var express = require("express");
var path = require("path");
var session = require("express-session");
var app = express();

app.use(express.static(path.join(__dirname, "project")));

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, "project", "404.html")); // gestionarea accesarii domeniilor inexistente, redirectionare 404.html
});

app.listen(5000, function(){
    console.log("Serverul e pornit pe http://localhost:5000");
});