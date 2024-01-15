const http = require("http");
const library = require("./practiceLibrary.js");

const server = http.createServer((res) => {
  const result = library.properCase(
    "hi my name is ashish. i am a software developer."
  );

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(result);
});

server.listen(8054);

console.log("Server is running on 8054");
