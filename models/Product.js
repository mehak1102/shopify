const mongoose = require('mongoose')
const Review = require('./Review')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        // default
    },
    price:{
        type:Number,
        trim:true,
        min:0
    },
    desc:{
        type:String,
        trim:true,
    },
    avgRating:{
        type:Number,
        default:0
    },

    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'

        }
    ],
    author:{
        type:mongoose.Schema.Types.ObjectId,
            ref:'User'
    }
})
// middleware jo behind the scene mongodb operations krwane pr use 
// hotehai and iske ande pre and post middleware hote h which are basically used mongoose
// over the schema and before model is js class
productSchema.post('findOneAndDelete',async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id:{$in:productSchema.reviews}})
    }
})



let Product = mongoose.model("Product",productSchema)
module.exports = Product;