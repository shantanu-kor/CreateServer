const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        return fs.readFile('message.txt', (err, data) => {
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form></body>`)
            res.write('</html>');
            return res.end();
        });
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    // if (url === '/home') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My Home Page</title></head>');
    //     res.write('<body><h1>Welcome Home</h1></body>')
    //     res.write('</html>');
    //     return res.end();
    // }
    // else if (url === '/about') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My About Page</title></head>');
    //     res.write('<body><h1>Welcome to About Us Page</h1></body>')
    //     res.write('</html>');
    //     return res.end();
    // }
    // else if (url === '/node') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My Node Page</title></head>');
    //     res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    //     res.write('</html>');
    //     return res.end();
    // }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text',
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';