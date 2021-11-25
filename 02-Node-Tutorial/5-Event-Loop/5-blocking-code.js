const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello This is home page");
  } else if (req.url === "/about") {
    //   Blocking Code = This will not only block the /about code, but will also block all other urls i.e. / and /error, i.e. until the for loop gets executed we can't load any of these pages.
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i, j);
      }
    }
    res.end("Hello this is about page");
  } else {
    res.end("Wrong url go back");
  }
});

server.listen(5000, () => {
  console.log("Listening on port 5000");
});
