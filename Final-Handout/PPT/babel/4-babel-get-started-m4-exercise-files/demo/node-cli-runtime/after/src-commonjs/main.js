require("babel-register");
require("babel-polyfill");
var operations = require("./arithmetic.js");

var result = operations.add(1,1);
console.log(result);

result = operations.subtract(3,1);
console.log(result);

var included = "abcde".includes("cd")
console.log(included);

