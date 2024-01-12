const mongoose = require("mongoose");
const{ mailSender } = require("../utils.js/mail");

const otpSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true
    },
    otp :{
        type : String ,
        required : true ,
    },
    createdAt : {
        type : Date ,
        default : Date.now(),
        expiresAt : 5*60 ,
    }
});
async function sendEmailVerification(email,otp){
try {
    const mailResponse = await mailSender(email ," Otp Verification Email " , otp);
    console.log("Email sent successfully" , mailResponse);
} catch (error) {
    console.log("error occured while sending mail ",error.message);
    throw error ;
}
};
//middleware
otpSchema.post("save" ,async function(next) {
    await sendEmailVerification(this.email , this.otp);
    next();
})

module.exports = mongoose.model("OTP", otpSchema);
