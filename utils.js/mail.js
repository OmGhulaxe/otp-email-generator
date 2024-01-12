const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async(email ,title, otp)=>{
    
    const transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : 465 ,
        secure : true ,
        auth : {
            user : process.env.MAIL_USER,
            pass : process.env.MAIL_PASS,
        },

    });

    const info = await transporter.sendMail({
        from : process.env.MAIL_USER,
        to : email,
        subject : "OTP",
        text : "Otp sent successfully",
        html : `your otp is ${otp}.`
    });
}