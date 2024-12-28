const Product = require("../models/Product");
const User = require("../models/User");


const ViewtheCart = async (req,res) => {
    let user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum , curr)=> sum+curr.price , 0)
    const productInfo = user.cart.map((p)=>p.desc).join(',');
    res.render('cart/cart' , {user, totalAmount , productInfo });
    
}
const AddProductToCart = async (req,res) => {
    let{productId} = req.params; //getting product id
    let userId = req.user._id; //getting user id
    let product = await Product.findById(productId); //findig product 
    let user = await User.findById(userId); //finding user
    user.cart.push(product);
    await user.save();
    res.redirect('/user/cart');
}



module.exports = {ViewtheCart , AddProductToCart}