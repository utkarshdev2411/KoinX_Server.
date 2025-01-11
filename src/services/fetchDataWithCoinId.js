const axios = require('axios');
const API_URL = 'https://api.coingecko.com/api/v3';

const fetchDataWithCoinId = async (coinId) => {
    try {
      const response = await axios.get(`${API_URL}/simple/price`, {
        params: {
          ids: coinId,
          vs_currencies: 'usd',
          include_market_cap: true,
          include_24hr_change: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error.message);
    }
  }


module.exports = {fetchDataWithCoinId}