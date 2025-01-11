const express = require('express');
const router=express.Router();

const {getLatestStats} =require('../controller/statsController');

router.route('/').get(getLatestStats);

module.exports = router;