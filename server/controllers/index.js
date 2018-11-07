const key = require('../key')
const { GraphQLClient } = require('graphql-request');

const findRestaurants = async (req, res) => {
    let { alias, location } = req.params;
    try {
        const findRestaurantsQuery =
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
        const data = await graphQLClient.request(findRestaurantsQuery, { location, alias });
        console.log(data.hours.filter(x => x.open.length > 0));
        // let yelpResult = data.search.business.hours
        // let filtered = yelpResult.filter(open => open.hours.is_open_now == true)

        let yelpResult2 = data.search.business[Math.floor(Math.random() * data.search.business.length)]
        // console.log(yelpResult2.hours[0].open)
        // console.log(yelpResult2.filter(x => x.hours[0].open === true))
        res.status(200).send(yelpResult2);
    }
    catch (e) {
        res.status(404).send(e.message)
    }
}

module.exports = { findRestaurants }