const User = require("../models/User");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, otp} = req.body;

    if (!name || !email || !password || !confirmPassword || !otp) {

      return res.status(403)
      .send({
        success: false,
        message: "All Fields are required",
      })
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {

      return res.status(400)
      .json({
        success: false,
        message:"Password and Confirm Password do not match. Please try again.",
      })
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400)
      .json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    //finding the most recent otp
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400)
      .json({
        success: false,
        message: "The OTP is not valid",
      })
    }
    else if (otp !== response[0].otp) {
      //invalid otp
      return res.status(400)
      .json({
        success: false,
        message: "The OTP is not valid",
      })
    }


    //hash password
    const hashpassword = await bcrypt.hash(password, 10);
    //create the user
    const user = await User.create({
      name,
      email,
      password: hashpassword,
    });

    return res.status(200)
    .json({
      success: true,
      user,
      message: "User registered successfully",
    })
  }
  catch (error) {
    console.error(error)
    return res.status(500)
    .json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}