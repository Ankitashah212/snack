var express = require("express");


var router = express.Router();

// Import the model (snack.js) to use its database functions.
var snack = require("../models/snacks.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //console.log("called");
  snack.all(function(data) {
    var allSnack = {
      snack: data
    };
    //console.log(allSnack);
    
    res.render("index", allSnack);
  });
});

router.post("/snack/create", function(req, res) {
  snack.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.post("/snack/eat/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  //console.log("condition", condition);

  snack.update({
    eaten: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect('/');
      res.status(200).end();
    }
  });

});


router.post("/snack/truncate", function(req, res) {
  
   snack.truncate(function(result) {
     
       res.redirect('/');
      
   });
 });
 
 


// Export routes for server.js to use.
module.exports = router;
