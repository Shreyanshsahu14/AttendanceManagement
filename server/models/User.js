const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    token: {
        type: String,
      },
})
module.exports=mongoose.model("user",UserSchema);