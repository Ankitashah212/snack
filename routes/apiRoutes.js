
module.exports = function (app) {
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
            snack: snackArray,
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
            }
            console.log(snackArray[i]);

        }
        //  res.json(chars[winner]);
        res.redirect('/');

    });

};