const express = require('express');
const router=express.Router();

const {getDeviation} =require('../controller/deviationController.js');

router.route('/').get(getDeviation);

module.exports = router;