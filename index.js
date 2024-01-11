const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello Ashish");
  })
  .listen(3000);
console.log("Server is running");
