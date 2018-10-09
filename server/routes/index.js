const express = require('express')
const router = express.Router()

const {
    findRestaurants,
    receiveData
} = require('../controllers')


router.get('/request', findRestaurants)
router.post('/receive', receiveData)



module.exports = router