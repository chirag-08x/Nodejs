const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log("Hello world");
console.log("Hello world2");
