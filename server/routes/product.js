const express = require('express');
const {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/product');

const router = express.Router();

router.get('/all', getProducts); //http://localhost:3000/product/all
router.get('/:id', getProduct); //http://localhost:3000/product/id
router.post('/add', addProduct); //http://localhost:3000/product/add DATA:
/* {
  price: 100,
  name: "Some Name",
  properties: {
    width: 100,
    height: 200,
  },
  stock: "Stock Name",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus unde hic laborum sed magni praesentium, illo illum ex ducimus minus id dolor nisi beatae veritatis minima, ullam eveniet aliquam a!",
}, */

router.post('/:id/delete', deleteProduct); //http://localhost:3000/product/id/delete
router.post('/:id/update', updateProduct); //http://localhost:3000/product/id/update DATA: {name, any ..}
module.exports = {
  routes: router,
};
