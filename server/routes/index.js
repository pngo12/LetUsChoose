const express = require('express')
const router = express.Router()

const {
    findRestaurants
} = require('../controllers')



router.get('/request', findRestaurants)
router.post('/:id', findRestaurants)



module.exports = router