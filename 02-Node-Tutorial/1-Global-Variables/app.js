// Global = No window

/*
__dirname = path to current directory.
__filename = file location.
require = function to use/import modules.
module = info about current module(file). Used mainly for exports.
process = info about env where the program is being executed.
*/

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

// We also have access to setInterval in nodejs
setInterval(() => {
  console.log("Time expired");
}, 2000);
