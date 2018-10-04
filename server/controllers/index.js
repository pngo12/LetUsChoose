const yelp = require('yelp-fusion')
const key = require('../key')
const client = yelp.client(key)
const { GraphQLClient } = require('graphql-request');
// const searchRequest = {
//     term: 'coffee',
//     location: 'costa mesa, ca'
// }

const findRestaurants = async (req, res) => {
    try {
        // //comment out the two lines below
        // let response = await client.search(searchRequest);
        // res.json(response.jsonBody.businesses[0])

        const query = `
        {
            search(term:"taco", location: "Irvine, CA"){
                total
                business {
                    name
                    price
                    location {
                        city
                    }
                }
            }
        }
        `
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
    // client.search(searchRequest)
    //     .then(response => {
    //         // console.log(res.jsonBody.businesses)
    //         // res.send(res)
    //         const results = response.jsonBody.businesses[0]
    //         const json = JSON.stringify(results, null, 4)
    //         res.json(results);
    //     })
    //     .catch(err => ({ message: err }))

    // async no mans land

}

module.exports = { findRestaurants }