// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found!</h1>')
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);