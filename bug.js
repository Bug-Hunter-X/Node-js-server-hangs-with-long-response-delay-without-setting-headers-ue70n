const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the response will be never sent
  // res.writeHead(200);

  // This will cause a ECONNRESET on the client
  setTimeout(() => {
    res.writeHead(200);
    res.end('Hello World!');
  }, 10000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});