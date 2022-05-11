const http = require("http");
const fs = require("fs");

const port = process.env.PORT;
const hostName = "127.0.0.1";

const Server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, "utf-8", { "content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./Html/home.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./Html/contact.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./Html/about.html");
  } else {
    handleReadFile(404, "./Html/error.html");
  }
});

Server.listen(port, hostName, () => {
  console.log(`Your server is running succesfully http://${hostName}:${port}`);
});
