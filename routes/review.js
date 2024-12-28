const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Review = require('../models/Review')
const{validateReview}= require('../middleware')
const {addReview} =  require('../controllers/review')


router.post('/products/:id/review',validateReview,addReview)

// router.delete('/products/:id/:idd',async(req,res)=>{
//     let{id,idd}=req.params;
//     await Review.findByIdAndDelete(idd);
//     res.redirect(/review/${id})

// })

module.exports = router;