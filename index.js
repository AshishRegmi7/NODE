const http = require("http");
const greeting = require("./library");
const math = require("./library");
const upperCase = require("uppercase-first");

let server1 = http.createServer((request, response) => {
  greeting.getHello();
  greeting.getGreetings("Sujal");
  greeting.getNamaste("Ashish");

  math.addition(2, 3);
  math.sub(9, 8);
  const result = upperCase("hello i am ashish regmi from the server");
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(result);
});
server1.listen(8000);
console.log("Server is running");

let server2 = http.createServer((req, res) => {
  res.writeHead(300, { "Content-Type": "text/html" });
  res.end("Another server");
});
server2.listen(7777);
console.log("ok");
