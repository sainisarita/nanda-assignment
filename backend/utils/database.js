const mongoose = require('mongoose');
require('dotenv').config();

 const dbConnect= ()=>{
    return mongoose.connect(process.env.MONGO_SRV_URI,{
        // userNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Database connection successfully')
    }).catch((e)=>{
        console.log('Failed to connect database',e)
    });
    }
    
    module.exports = { dbConnect };