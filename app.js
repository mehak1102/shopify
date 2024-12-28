// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const seedDB = require('./seed')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport= require('passport')
const LocalStrategy= require('passport-local')




const User = require('./models/User')
const productRoutes=require('./routes/product')
const reviewRoutes = require('./routes/review')
const authRoutes=require('./routes/auth')
const cartRoutes=require('./routes/cart')
const productApi=require('./routes/api/api')


// const dbURL = process.env.dbURL || 'mongodb://localhost:27017/shopping-sam-app-2';


// mongoose.set('strictQuery', true);
// mongoose.connect(dbURL)
//     .then(() => console.log('DB Connected'))
//     .catch((err) => console.log(err));


const url="mongodb+srv://chandnamehak1102:gxrwOJyB4ubswLKb@cluster0.wynve.mongodb.net/shopifyretryWrites=true&w=majority"
mongoose.connect(url)
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db error")
    console.log(err)
})


let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 24*60*60*1000,
        maxAge: 24*60*60*1000
    }
    
    
  }

app.engine('ejs',ejsMate)
app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname,'views'))//view folder
app.use(express.static(path.join(__dirname,'public')))//public folder
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.use(session(configSession));
app.use(flash());


app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success= req.flash('success');
    res.locals.error= req.flash('error');
    next();
})




passport.use(new LocalStrategy(User.authenticate()));



app.get('/',(req,res)=>{
    res.render('home')
})



app.use(productRoutes)
app.use(reviewRoutes)
app.use(authRoutes)
app.use(cartRoutes)
app.use(productApi)




// seedDB();



const PORT = 8080
app.listen(PORT,()=>{
    console.log("server connected at port 8080")
})