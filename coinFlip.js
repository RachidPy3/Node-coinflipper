const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  if (page === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page === "/flip") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const random = Math.ceil(Math.random() * 2) === 1 ? "head" : "tails";
    const objToJson = {
      decision: random,
    };
    res.end(JSON.stringify(objToJson));
  } else if (page == "/client.js") {
    fs.readFile("client.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    console.log("page not found");
  }
});

server.listen(8000);
