const key = require('../key')
const { GraphQLClient } = require('graphql-request');

const findRestaurants = async (req, res) => {
    let { alias, location } = req.params;
    try {
        const findRestaurantsQuery = `
            query findRestaurantsQuery($alias: String, $location: String) {
                search (term: $alias, location: $location, radius: 2500) {
                    business {
                        name
                        photos
                        url
                        display_phone
                        hours {
                            is_open_now
                            open {
                                start
                                end
                            }       
                        }
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
        const data = await graphQLClient.request(findRestaurantsQuery,{ location, alias });
        // let yelpResult = data.search.business.hours
        // let filtered = yelpResult.filter(open => open.hours.is_open_now == true)
        // console.log(yelpResult)


        let yelpResult2 = await data.search.business[Math.floor(Math.random() * 20)]
        res.status(200).send(yelpResult2)
    }
    catch (e) {
        res.status(404).send(e.message)
    }
}

module.exports = { findRestaurants }