const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
    // res.send({key1: "value"});
});

module.exports = router;