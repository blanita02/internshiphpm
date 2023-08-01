// We can also change the whole app to ES6 syntax but it will be like this for the task
const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = require("./route.js");

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
