const express = require('express')
const Product = require('../models/Product')
const Review = require('../models/Review')
const router = express.Router()
const{validateProduct, isLoggedIn,isSeller,isProductAuthor}= require('../middleware')
const {showAllProducts, productForm , createProduct , showProduct , editProductForm , updateProduct , deleteProduct} =  require('../controllers/product')

// to show all product
router.get('/products',isLoggedIn,showAllProducts)

// to show the form
router.get('/product/new',isLoggedIn,productForm)

// to actually add the data
router.post('/products',validateProduct,isLoggedIn,isSeller,createProduct)

// show info about one form
router.get('/products/:id',isLoggedIn,showProduct)

// show edit form of one product
router.get('/products/:id/edit',isLoggedIn,editProductForm )

// to update particular product
router.patch ('/products/:id',validateProduct,isLoggedIn, updateProduct)
        
// to delete articular product
router.delete ('/products/:id',isLoggedIn,isProductAuthor, deleteProduct)

module.exports = router;