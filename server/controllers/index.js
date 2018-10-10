const yelp = require('yelp-fusion')
const key = require('../key')
// const client = yelp.client(key)
const { GraphQLClient } = require('graphql-request');

const receiveData = (req,res) => {
    console.log(req.body)
    let search = req.body
}

const findRestaurants = async (req, res) => {
    try {
        const query = `
         { 
            search(term:"Japanese", 
                location: "Irvine, CA",
                radius: 2500
                )
            {
            business{
            name
            price
            hours{
              is_open_now
              open{
                start
                end
              }
            }
            display_phone
            location{
              formatted_address
            }
        }
    }
}`
        const endpoint = "https://api.yelp.com/v3/graphql";
        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                'Authorization': `Bearer ${key}`
            }
        })
        const data = await graphQLClient.request(query);
        // let yelpData = JSON.stringify(data, null, 2)
        // let yelpResult = data.search.business[Math.floor(Math.random() * 20)]
        let yelpResult = await data.search.business[Math.floor(Math.random() * 20)]
            res.send(yelpResult)
    } 
    catch (e) {
        res.status(404).send(e.message)
    }
}

module.exports = { findRestaurants, receiveData }