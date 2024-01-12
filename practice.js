const http = require("http");
const library = require("./practiceLibrary");

const server = http.createServer((req, res) => {
  const result = library.properCase("oh my lord ganesha");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(result);
});

server.listen(8054);
console.log("Server is running on http://localhost:8068");
