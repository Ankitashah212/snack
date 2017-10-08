var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make the port dynamic
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./controllers/snackController.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
//depricated
//require('./routes/apiRoutes.js')(app);
