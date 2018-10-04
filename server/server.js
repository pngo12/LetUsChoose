const express = require('express')
const router = require('./routes')

const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, () => console.log(`running on ${port}`))

app.use('/', router)

module.exports = app

// const yelp = require('yelp-fusion')
// const key = require('./key')
// comment out key, and plug in api key. yelp.client('API_KEY_HERE')
// const client = yelp.client(key)

// const searchRequest = {
//     term: 'coffee',
//     location: 'costa mesa, ca'
// }



//controller
// client.search(searchRequest)
//     .then(res => {
//         //remove the amount to receive 20 objects
//         const results = res.jsonBody.businesses
//         const json = JSON.stringify(results, null, 4)
//         console.log(json)
//     })
//     .catch (err => {
//         console.log(err)
//     })
