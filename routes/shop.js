const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.send('<h1>Hello from Express!</h1>');
    // res.send({key1: "value"});
});

module.exports = router;