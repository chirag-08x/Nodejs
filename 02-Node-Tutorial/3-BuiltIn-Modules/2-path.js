// Path Module

const path = require("path");

// console.log(path);

// seprator used by the OS to seprte path name i.e. C/Users/chirag/etc
const seprator = path.sep;
console.log("Seprator used by OS is", seprator);

// Joins the path of the given directory using the OS seprator
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base path = final path/file that we are accessing, in above example test.txt
const basePath = path.basename(filePath);
console.log(basePath);

// returns the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
