
'use strict'
const yelp = require('yelp-fusion')
const key = require('./key')
// comment out key, and plug in api key. yelp.client('API_KEY_HERE')
const client = yelp.client(key)

const searchRequest = {
    term: 'coffee',
    location: 'costa mesa, ca'
}

client.search(searchRequest)
    .then(res => {
        //remove the amount to receive 20 objects
        const results = res.jsonBody.businesses[0]
        const json = JSON.stringify(results, null, 4)
        console.log(json)
    })
    .catch (err => {
        console.log(err)
    })

