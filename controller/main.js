
const otpGenerator = require('otp-generator')
const OTP = require("../model/otp");


exports.sendOtp = async(req,res)=>{
    try {
        //user input
        const {email} = req.body ;
        //generating otp
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        console.log(otp);
        
     
        const gOTP = await OTP.create({
            email : email,
            otp : otp,
            createdAt : Date.now()
        })
        console.log(gOTP);
   
        res.status(200).json({
            success : true,
            message : "OTP sent successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false ,
            message : error.message
        })
    }
}
