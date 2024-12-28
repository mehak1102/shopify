const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router()


// show form of signup
router.get('/register',(req,res)=>{
    try{
        res.render('auth/signup');
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

// actuaally want to register a user
router.post('/register',async(req,res)=>{
    try{
        let {email,username,password,role}= req.body;
        const user = new User({email,username,role});
        const newUser= await User.register(user,password);
        // res.redirect('/login'); [wen want login after sign up ]
        // [to dont want loging after sign up]
        req.login(newUser,function(err){
            if(err){return next(err)}
                req.flash('success','welcome,you registered successfully')
                return res.redirect('/products')
            
        })
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})


// to get login form
router.get('/login',(req,res)=>{
    try{
        res.render('auth/login');
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
})

// actually login via the db
router.post ('/login', 
   passport.authenticate('local', { 
    failureRedirect: '/login',
    failureMessage: true }),
 (req,res) => {
   try{
    
    req.flash('success', 'welcome back!');
    res.redirect('/products')
   }
   catch(e) {
      res.status(500).render('error' , {err:e.message});
   } 
})

// logout
router.get('/logout' ,(req,res)=>{
    try{
        ()=>{
            console.log(req.user)
            req.logout();

        }
        req.flash('success','Bye! see you soon')
        res.redirect('/login')
    }
    catch(e) {
        res.status(500).render('error' , {err:e.message});
     } 
})

   


module.exports = router;