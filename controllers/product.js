const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: 'add-product'
  });
};

exports.postAddProduct = (req, res) => {
  const {title} = req.body;
  const {imageUrl} = req.body;
  const {price} = req.body;
  const {description} = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  console.log(product);
  product
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};