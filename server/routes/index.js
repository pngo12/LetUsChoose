const express = require('express')
const router = express.Router()

const {
    findRestaurants
} = require('../controllers/index')



router.get('/', findRestaurants)
router.post('/:id', findRestaurants)



module.exports = router