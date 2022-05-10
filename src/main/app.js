/* eslint-disable prettier/prettier */
const http = require('http');

const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
  })
  .listen(8081);
