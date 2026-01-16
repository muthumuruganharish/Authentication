const express=require("express");
const User=require("../Models/User")
const route=express.Router()

route.post("/signup",async(req, res)=>{

    try{

        const {username,email,password}=req.body

        //checking if there is a user already exist or not
        const exists=await User.findOne({email})

        if(exists){
            return res.status(400).json({message:"user already exists"});
        }

        const newUser= new user({
            username,
            email,
            password,
        })

        await newUser.save();

        res.status(201).json({message:"data added successfully"})





    }

    catch(err){

        res.status(500).json({message:"Server error"})

    }

})

module.exports=route