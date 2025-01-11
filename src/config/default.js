require('dotenv').config();


module.exports={
    'database':{
        'mongoURI':process.env.MONGOURI
    },
    'server':{
        'port':process.env.PORT
    }
}