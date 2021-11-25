const { readFile, writeFile, stat } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./first.txt", "utf8");
    const second = await readFilePromise("./second.txt", "utf-8");
    await writeFilePromise(
      "./result.txt",
      `This is awesome ${first} ${second}`
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
console.log("Exit code");
