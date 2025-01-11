const CryptoData = require("../model/CryptoData");


const calculateDeviation = async (coinId) => {
    const prices = await CryptoData.find({ coinId })
    .sort({ timestamp: -1 }) //Sorting in descending order to get latest updates
    .limit(100)
    .select('priceInUsd')
    .lean(); // To query fatser coz it returns plain objects instead of mongoose documents

  if (prices.length === 0) {
    throw new Error('No data found for the specified coin');
  }
  console.log(prices)
  const priceValues = prices.map(p => p.priceInUsd);
  const mean = priceValues.reduce((a, b) => a + b) / priceValues.length;
  const squaredDiffs = priceValues.map(price => Math.pow(price - mean, 2));
  const variance = squaredDiffs.reduce((a, b) => a + b) / priceValues.length;
  const deviation = Math.sqrt(variance);

  return {
    deviation: Number(deviation.toFixed(2))
  };
}
module.exports = {calculateDeviation}