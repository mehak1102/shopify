const Review = require("../models/Review");
const Product = require('../models/Product')

const addReview = async(req,res)=>{
    try{
        let {id}= req.params;
    let {rating,comment} = req.body;
    const product = await Product.findById(id);
    const review = new Review({rating,comment});

    product.reviews.push(review);
    await review.save();
    await product.save();
    req.flash('success','review added successfully')
    res.redirect(`/products/${id}`)
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
}





module.exports = {addReview }