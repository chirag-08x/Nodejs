// Async Fs i.e. it will run in the background

const { readFile, writeFile, appendFile } = require("fs");

// to demonstrate asynchronous behaviour.
console.log("Starting Tas");

// readFile uses callback hell.
// Better way of doing it will learn later.
// Alternative promises, async-await.
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the combined result of ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // Since we are writing a file nothing is getting returned so we will console out undefined.
        console.log(
          "Nothing gets returned since we are writing not reading",
          result
        );
        console.log("Ending task");
      }
    );
  });
});

// to demonstrate asynchronous behaviour.
console.log("Starting the new Task");

// The callback hell will run at the last, it keeps getting executed in the background.
