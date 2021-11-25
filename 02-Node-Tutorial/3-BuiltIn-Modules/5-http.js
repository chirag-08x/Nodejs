// http = allows us to set up our web server. Will be covered later in great detail.

const http = require("http");

// req(request) = incoming request by the client. It's an Object.
// res(response) = response that we/admin are sending back. It's an Object.
// can call req and res anything. common convention is to call req, res.
const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

// Server Port can be any random port
server.listen(5000);

// Can be viewed in browser with URl => localhost:5000
