const Product = require('./models/Product');
const{productSchema , reviewSchema} = require('./schema')


const validateProduct = (req,res,next)=>{
    const{name,img,price,desc} = req.body;
    const{error,value} = productSchema.validate({name,img,price,desc})
    if(error){
        return res.render('error')
    }
    next()
}

const validateReview = (req,res,next)=>{
        const{rating,comment} = req.body;
        const{error,value} = reviewSchema.validate({rating,comment})
        if(error){
            return res.render('error')
        }
        next()

}

const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','please login first')
        return res.redirect('/login')
    }
    next();
}

const isSeller = (req,res,next)=>{
    if(!req.user.role){
        req.flash('error','you do not have the access')
        return res.redirect('/products')
    }
    else if(req.user.role !== 'seller'){
        req.flash('error','you do not have the access')
        return res.redirect('/products')
    }
    next();
}

const isProductAuthor = async(req,res,next)=>{
    let{id}= req.params;
    let product = await Product.findById(id)
    if(!product.author.equals(req.user._id)){
        req.flash('error','you do not have the access')
        return res.redirect('/products')
    }
    next();
}
module.exports = {validateReview,validateProduct,isLoggedIn,isSeller,isProductAuthor}