const express=require("express");
const router=express.Router();
const {
    signup,
    login,
    sendotp,
    changePassword,
}=require("../controllers/Auth");
// const {
//     resetPasswordToken,
//     resetPassword,
//   } = require("../controllers/resetPassword")

router.post("/signup",signup);
router.post("/login", login);
router.post("/sendotp", sendotp);
router.post("/changepassword", changePassword)


module.exports=router;