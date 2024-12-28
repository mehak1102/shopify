const mongoose = require('mongoose')
const Product = require('./models/Product')


const products = [
    {
        name:"Iphone 14 pro",
        img:"https://images.unsplash.com/photo-1695578130338-d517e0020d1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lMTRwcm98ZW58MHx8MHx8fDA%3D",
        price:130000,
        desc:"excellent camera features"
    },

    {
        name:"Macbook m2 pro",
        img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hY2Jvb2slMjBtMiUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price:250000,
        desc:"sustainable and easy to carry"
    },

    {
        name:"APPLE airpods",
        img:"https://images.unsplash.com/photo-1675317132583-75301c0d0287?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwYWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price:50000,
        desc:"best music quality"
    },

    {
        name:"APPLE smartwatch",
        img:"https://images.unsplash.com/photo-1530508943348-b8f606ea2bf2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        price:120000,
        desc:"simple and elegant design"
    },

    {
        name:"Ipad",
        img:"https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price:160000,
        desc:"get things done in magical way"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;