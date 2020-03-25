var arangojs = require("arangojs");
var db = new arangojs.Database();
console.log(db.collection("Instances"));

module.exports = db;
