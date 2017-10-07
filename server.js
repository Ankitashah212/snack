var express = require("express");
var app = express();
var port = 3000;
var exphbs = require("express-handlebars");
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");

//Set up express app

var app = express();
var PORT = process.env.PORT || 3000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make the port dynamic
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

require('./routes/apiRoutes.js')(app);
