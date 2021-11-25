const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./first.txt", "utf8");
    const second = await readFile("./second.txt", "utf-8");
    await writeFile("./result.txt", `This is awesome ${first} ${second}`, {
      flag: "a",
    });
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
console.log("exit code");
