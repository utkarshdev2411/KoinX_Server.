const {calculateDeviation} = require('../services/calculateDeviation')


const getDeviation = async(req, res) => {
    try {

        
        const {coin} = req.query;
        if(!coin) res.status(404).json({'message': 'Query parameter is required'})

        const data = await calculateDeviation(coin)
        res.status(200).json(data)
        
    } catch (error) {
        console.error(error);
        res.status(404).json({'message': error.message})
    }
}
module.exports = {getDeviation}