const mongoose=require('mongoose')
const config=require('../config/default')

const connectDB=()=>{
    mongoose.connect(config.database.mongoURI)
    .then(()=>{
        console.log('Database connected!');
    })
    .catch((e)=>{
        console.log('Error connecting the database');
        console.log(e);
    })
}
module.exports=connectDB;