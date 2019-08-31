const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: 'add-product'
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image_url = req.body.image_url;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, image_url, description, price);
  console.log(product);
  product
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};



