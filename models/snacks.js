// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var snack = {
  all: function(cb) {
    orm.all("snacks", function(res) {
      cb(res);
    });
  }, 
  
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("snacks", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("snacks", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (snacksController.js).
module.exports = snack;
