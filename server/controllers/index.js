const yelp = require('yelp-fusion')
const key = require('../key')
const { GraphQLClient } = require('graphql-request');

const findRestaurants = async (req, res,) => {
    let {alias, location} = req.params;
    try {
        const query = `query 
            {
                search (
                    term: ${alias}, 
                    location: ${location},
                    radius: 2500
                    )
            {
            business { 
            name 
            price
            hours {
              is_open_now
              open {
                start
                end
              }
            }
            display_phone
            location {
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
        let yelpResult = await data.search.business[Math.floor(Math.random() * 20)]
    
        res.status(200).send(yelpResult)
    }
    catch (e) {
        res.status(404).send(e.message)
    }
}

module.exports = { findRestaurants }