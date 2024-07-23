const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const databaseConnection = require("./config/dbconnect");
const upload = require("./middlewares/multer");
const Product = require("./models/product.model");
const Users = require("./models/user.model")
const port = 4000;
const jwt =require( "jsonwebtoken");


app.use(express.json());
app.use(cors());
databaseConnection();

app.get("/", (req, res) => {
    res.send("hello whats up");
});

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log('removed');
    res.json({
        success: true,
        name: req.body.name,
    });
});
//endpoint for allproducts
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
});


//create endpoint for newcollection data
app.get('/newcollection',async(req,res)=>{
    let products= await Product.find({});
    let newcollection= products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on Port " + port);
    } else {
        console.log('error' + error);
    }
});

app.use('/images', express.static('./upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;

        if (products.length > 0) {
            let lastProduct = products.slice(-1)[0];
            console.log('Fetched last product:', lastProduct);
            if (lastProduct && lastProduct.id) {
                id = parseInt(lastProduct.id) + 1;
                console.log('Computed id:', id);
            } else {
                console.log('No valid id found in the last product, starting from id 1');
                id = 1;
            }
        } else {
            id = 1; // Start with ID 1 if no products exist
            console.log('Starting with id:', id);
        }

        if (isNaN(id)) {
            throw new Error("Failed to generate a valid ID.");
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            available: req.body.available,
        });

        await product.save();

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.log("Error saving product:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});


//Creating Endpoint for registration of the user

app.post('/signup',async(req,res)=>{

    let check= await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same email id"})
    }
    let cart={}
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
        
    }
    const user= new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data= {
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom')
    res.json({success:true,token})
})


//creating endpoint for userlogin


app.post('/login',async(req,res)=>{

    let user= await Users.findOne({email:req.body.email});
    if(user){
        const passCompare= req.body.password=== user.password;
        if(passCompare){
            const data= {
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom')
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"})
        }
    }

    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }

})

//creating middleware to fetch user
const fetchUser =async(req,res,next)=>{
  const token =req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"Please authenticate using valid token"})
  }
  else{
    try {
        const data= jwt.verify(token,'secret_ecom');
        req.user= data.user;
        next();
        
    } catch (error) {
        res.status(401).send({errors:"Please authenticate using a valid token"})

        
    }
  }
}


//creatign endpoint for popular in women section

// app.get('/popularinwomen',async(req,res)=>{
//     let products= await  Product.find({category:"women"})
//     let popular_in_women =products.slice(0,4);
//     console.log("Popular in women fetched");
//     res.send(popular_in_women);
// })

//creating endpoint for adding products in cartdata

app.post('/addtocart',fetchUser,async(req,res)=>{
    // console.log(req.body,req.user);
    console.log("added",req.body.itemId);

    let userData= await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")
})

//creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData= await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
})

//creating endpoint to get cartdata

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Get Cart");
    let userData= await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    
})