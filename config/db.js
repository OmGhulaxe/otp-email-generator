const mongoose = require("mongoose");

exports.dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL ,{
       
    })
    .then(()=>{
        console.log("Db connection successful");
    })
    .catch((err)=>{
        console.error(err);
        console.log(err.message);
        process.exit(1)
    } )
}