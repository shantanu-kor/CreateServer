const path = require('path');

const rootDir = require('../util/path');

exports.getShop = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.send('<h1>Hello from Express!</h1>');
    // res.send({key1: "value"});
};