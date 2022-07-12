const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products/:productID', (req, res) => {

  const {productID} = req.params;
  const singleProduct = products.find(
    product => product.id === Number(productID)
  );

  if (!singleProduct) {
    res.status(404).send('Product not found');
  }

  res.json(singleProduct);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});