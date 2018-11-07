const key = require('../key');
const { GraphQLClient } = require('graphql-request');

const findRestaurants = async (req, res) => {
    let { alias, location } = req.params;
    try {
        const findRestaurantsQuery =
        // Grab the alias and location param and query
            `query findRestaurantsQuery($alias: String, $location: String) {
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
                                day
                            }       
                        }
                        location {
                            address1
                            city
                            state
                            postal_code
                        }
                    }
                }
            }`
        const endpoint = "https://api.yelp.com/v3/graphql";
        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                'Authorization': `Bearer ${key}`
            }
        });
        const data = await graphQLClient.request(findRestaurantsQuery, { location, alias });
        // Randomize the results and send only one
        let yelpResult2 = data.search.business[Math.floor(Math.random() * data.search.business.length)]
        res.status(200).send(yelpResult2);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}

module.exports = { findRestaurants }