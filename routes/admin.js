const express = require('express');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Title"><br><input type="text" name="size" placeholder="Size"><br><button type="submit">Add Product</button></form>');
    // res.send({key1: "value"});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;