const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  setTimeout(() => {
    res.end('Hello World!');
  }, 10000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});