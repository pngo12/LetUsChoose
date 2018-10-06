const express = require('express')
const router = express.Router()

const {
    findRestaurants
} = require('../controllers')


router.get('/request', findRestaurants)
router.post('/send', findRestaurants)



module.exports = router