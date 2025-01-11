const logger = require('morgan');
const dotenv = require( 'dotenv');
const express = require('express');
const cron = require('node-cron');

const connectDB = require('./db/db')
const config = require('./config/default')
const {fetchAndUpdateLatestPrice} = require('./services/fetchAndUpdateLatestPrice')

const statsRouter = require('./routes/stats')
const deviationRouter = require('./routes/deviation')

dotenv.config();
connectDB();
fetchAndUpdateLatestPrice(); // Fetching and storing data when server starts so that '/deviation' does not return null

const app = express();
app.use(express.json());
app.use(logger('dev'));


app.use('/stats', statsRouter)
app.use('/deviation', deviationRouter)

const PORT = config.server.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// Schedule background job to run every 2 hours
cron.schedule('0 0 */2 * * *', async () => {
    await fetchAndUpdateLatestPrice()
    console.log('Running scheduled cryptocurrency price update');
});