const path = require('path');

const rootDir = require('../util/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Title"><br><input type="text" name="size" placeholder="Size"><br><button type="submit">Add Product</button></form>');
    // res.send({key1: "value"});
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
};