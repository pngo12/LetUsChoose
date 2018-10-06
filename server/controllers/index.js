const yelp = require('yelp-fusion')
const key = require('../key')
const client = yelp.client(key)
const { GraphQLClient } = require('graphql-request');


const findRestaurants = async (req, res) => {
    try {
        const query = `
         { 
            search(term:"taco", 
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
                address1
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
        console.log(JSON.stringify(data, null, 2))

        res.json(data)

    } catch (e) {
        res.status(404).send(e.message)
    }
}

module.exports = { findRestaurants }