const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        console.log(req.url);
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    else if(url === '/about') {
        console.log(req.url);
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else{
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>404 Page</h1>');
        res.end();
    }
});

server.listen(3000);