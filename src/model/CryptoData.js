const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  coinId: {
    type: String,
    required: true,
    enum: ['bitcoin', 'matic-network', 'ethereum']
  },
  priceInUsd: {
    type: Number,
    required: true
  },
  marketCapInUsd: {
    type: Number,
    required: true
  },
  changeIn24h: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
cryptoDataSchema.index({ coinId: 1, timestamp: -1 });

 const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);
 module.exports = CryptoData;