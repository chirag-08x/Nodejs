// Splitting code into multiple files using modules.
// Modules use common Js, every file is module by default.
// If the function is provoked or anything that prints to console, is executed inside the utils.js file, we can directly call the file in app.js without exporting it, since it is being executed in utils.js itself, it will get executed here directly.(Not important)

// We can emit out .js, since it's a .js file.
const { john, peter } = require("./names.js");
const sayHi = require("./utils.js");
console.log(sayHi);

sayHi("susan");
sayHi(john);
sayHi(peter);

const alternativeSyntax = require("./alternative-syntax");
console.log(alternativeSyntax);
