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
        // Return only restaurants that have hours listed
        let result = data.search.business.filter(x => x.hours[0].open.length !== undefined);
        // Randomize the selection from result
        let randomPick = result[Math.floor(Math.random()* result.length)];
        
        res.status(200).send(randomPick);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}

module.exports = { findRestaurants }