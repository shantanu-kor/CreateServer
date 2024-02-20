// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(4000);

const app = express();

// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next(); // Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Title"><br><input type="text" name="size" placeholder="Size"><br><button type="submit">Add Product</button></form>');
    // res.send({key1: "value"});
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
    // res.send({key1: "value"});
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);