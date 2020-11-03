const http = require('http');
let hitcount = 0;
http.createServer((request, response) => {
    hitcount += 1;
    console.log("Hello World "+hitcount);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("Hello World "+hitcount, 'utf-8');
}).listen(80);
console.log('Server running at http://127.0.0.1:80/');