const mongoose = require('mongoose');
const config = require('../config/default');

const connectDB = () => {
  mongoose
    .connect(config.database.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000
    })
    .then(() => {
      console.log('Database connected!');
    })
    .catch((e) => {
      console.error('Error connecting to the database:');
      console.error(e.message || e);
      process.exit(1);
    });
};

module.exports = connectDB;