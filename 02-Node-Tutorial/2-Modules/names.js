// local
// Since variable secret is not in the app.js file, that is the only file that a user can see, so this variable is not accessible to anyone.
const secret = "SECRET_CODE";

// shared
const john = "john";
const peter = "peter";

// console.log(module);

// To export multiple values use an object to export.
// Single values like a function or variable can be exported directly.
// console.log() doesn't need export to get printed, it will print automatically if present in the utils file.
// module.exports is an object by default.
module.exports = { john, peter };

// We can't export like this only the last element will get exported, i.e. peter
module.exports = john;
module.exports = peter;
