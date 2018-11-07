const express = require('express');
const router = express.Router();
const { findRestaurants } = require('../controllers');


router.get('/request/:alias/:location', findRestaurants);

module.exports = router;