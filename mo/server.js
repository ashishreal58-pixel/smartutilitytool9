// server.js
// Basic HTTP server using the built-in http module with multiple routes

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  console.log(`Incoming request: ${method} ${url}`);

  res.setHeader('Content-Type', 'text/plain');

  switch (url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to Node Server');
      break;
    case '/about':
      res.statusCode = 200;
      res.end('About Page');
      break;
    case '/contact':
      res.statusCode = 200;
      res.end('Contact Page');
      break;
    default:
      res.statusCode = 404;
      res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Try visiting /, /about, /contact, or any invalid route.');
});
