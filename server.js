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
var router = express.Router();

//make the port dynamic

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






// quite basic constructor
function snack(name) {
    if (this instanceof snack) {
        this.name = name;
        this.flag = false;
    } else {
        return new snack(name);
    }

}
snack.prototype.eat = function () {

    this.flag = true;
}

var snackArray = [];
var cheetoes = new snack("cheetoes");
var chips = new snack("pringles");
snackArray.push(cheetoes);
snackArray.push(chips);

app.get("/", function (req, res) {
    // Handlebars requires an object to be sent to the index.handlebars file.
    console.log("get called");
    console.log(snackArray);

    // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
    res.render("index", {
        snack: snackArray
    });

});


app.post('/snack/create', function (req, res) {

    var temp = req.body;
    console.log("post called");
    console.log(temp);
    var newSnack = new snack(temp.name);
    snackArray.push(newSnack);
    //  res.json(chars[winner]);
    res.redirect('/');

});


app.post('/snack/eat', function (req, res) {

    var temp = req.body;
    console.log("eat called" + temp);

    for (var i = 0; i < snackArray.length; i++) {
        if (snackArray[i].name == temp.name) {
            snackArray[i].flag = true;
            console.log("in if condition");
        }
        console.log(snackArray[i]);
        
    }
    //  res.json(chars[winner]);
    res.redirect('/');

});


