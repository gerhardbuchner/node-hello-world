const http = require('http');
let hitcount = 0;
http.createServer((req, res) => {
    hitcount += 1;
    console.log("Hello World "+hitcount);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World "+hitcount, 'utf-8');
}).listen(80);
console.log('Server running at http://127.0.0.1:80/');