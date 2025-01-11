const axios = require('axios');
const CryptoData = require('../model/CryptoData');

const coins = ['bitcoin', 'matic-network', 'ethereum'];
const API_URL = 'https://api.coingecko.com/api/v3';

const fetchAndUpdateLatestPrice = async () => {
    try {
      const response = await axios.get(`${API_URL}/simple/price`, {
        params: {
          ids: coins.join(','),
          vs_currencies: 'usd',
          include_market_cap: true,
          include_24hr_change: true
        }
      });
      coins.forEach(async (coinId) => {
        const data = response.data[coinId];
        const newCryptoData = new CryptoData({
            coinId,
            priceInUsd: data.usd,
            marketCapInUsd: data.usd_market_cap,
            changeIn24h: data.usd_24h_change
        })
        await newCryptoData.save();
      })
      
      
      console.log('Cryptocurrency prices updated successfully');
      return response.data;
    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error.message);
    }
  }


module.exports = {fetchAndUpdateLatestPrice}