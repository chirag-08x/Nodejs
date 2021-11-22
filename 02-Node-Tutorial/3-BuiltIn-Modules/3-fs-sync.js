const { writeFileSync, readFileSync, appendFileSync } = require("fs");

// Reads the content of the file (file-location, encoding(mostly given utf8))
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

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
