const User=require("../models/User");
require("dotenv").config();

exports.signup=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be registered. Please try again.",
        })
    }
}