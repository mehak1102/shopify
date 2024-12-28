const express = require('express');
const { isLoggedIn } = require('../middleware');
const { ViewtheCart, AddProductToCart } = require('../controllers/cart');
const router = express.Router()

//route to see the cart
router.get('/user/cart', isLoggedIn , ViewtheCart)


// actually adding the product to the cart
router.post('/user/:productId/add', isLoggedIn, AddProductToCart)


module.exports = router;