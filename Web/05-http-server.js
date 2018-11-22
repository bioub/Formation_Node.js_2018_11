const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain')
      res.end('Home');
      break;
    case '/contact':
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html')
      res.end('<h2>Contact</h2>');
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html')
      res.end('<h2>Page not found</h2>');
  }

});

/*
server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello !!!!');
});
*/

server.on('error', (err) => {
  console.log(err);
});

/*
server.once('listening', () => {
  console.log('Server started localhost:8080');
});
*/

server.listen(8080, () => {
  console.log('Server started localhost:8080');
});
