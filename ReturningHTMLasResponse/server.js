const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // res.end('index.html')
  const data = fs.readFileSync("index.html");
  res.end(data);
});

server.listen(3000, (req, res) => {
  console.log("server is listening on 3000");
});
