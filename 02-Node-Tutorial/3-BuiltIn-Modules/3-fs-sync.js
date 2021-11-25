const { writeFileSync, readFileSync, appendFileSync } = require("fs");

// Reads the content of the file (file-location, encoding(mostly given utf8))
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

// to demonstrate synchronous behaviour.
console.log("Starting Tas");

// writeFileSync = first arg is file path, second is file content, if the file, doesn't exist it will create one. If the file exists it will overwrite the text in the file.

writeFileSync("./content/data.txt", "Hello this is a top secret data.");

// Appends data to the file
appendFileSync("./content/data.txt", "This is the appended data. ");

// There is one more way of appending data usign writeFileSync where we pass in the third flag="a" argument.
writeFileSync(
  "./content/data.txt",
  "This data is appended using writeFileSync.",
  { flag: "a" }
);

// to demonstrate synchronous behaviour.
console.log("Ending task");
console.log("Starting the new Task");

// Above code is synchronous, i.e. if our writeFileSync, readFileSync, appendFileSync uses plenty of time to run, it wont' run in the backgorund due to which the content below it will not get execute, until the above code gets fully executed, due to which app will load slowly.
