const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Home Page</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>');
        return res.end();
    }
    else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My About Page</title></head>');
        res.write('<body><h1>Welcome to About Us Page</h1></body>')
        res.write('</html>');
        return res.end();
    }
    else if (url === '/node') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Node Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);