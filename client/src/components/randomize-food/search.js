import React, { Component } from 'react';
// import axios from 'axios'
// import RenderOption from './renderoption'
// import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import client from '../../index'


class Search extends Component {
    state = { 
        alias: '',
        budget: '',
        location: ''
     }

    requestData = () => {
        client.query({
        query: gql`
            query search(
                term: ${this.state.alias},
                location: ${this.state.location},
                radius: ${2500}
            )
            {
                business{
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
            }`
        })
        .try(data => console.log(data))
        .catch(error => console.log(error));
     };

    //  requestdata = () => {
    //      <Query
    //         query={gql`
    //         {
    //             search 
    //             (
    //             term: this.state.alias,
    //             location: this.state.location,
    //             radius: 2500
    //             )
    //             {
    //                 business{
    //                     name
    //                     price
    //                     hours{
    //                         is_open_now
    //                         open{
    //                             start
    //                             end
    //                         }
    //                     }
    //                     display_phone
    //                     location{
    //                         formatted_address
    //                     }
    //                 }
    //             }
    //         }`}
    // >
    //          {({ loading, error, data }) => {
    //              if (loading) return <p>Hang on, we're finding you a place</p>;
    //              if (error) return <p>Sorry, we're not sure what happened, please try again.</p>;

    //              return data.search.map(({search}) => (
    //                     <div>
    //                         <p>{search.name}</p>
    //                     </div>
    //              ));
    //          }}
    //     </Query> 
    //  }




     handleOnChange = e => {
        this.setState({
        [e.target.name]: e.target.value.toLowerCase()
        })
    }     


    render() { 
        return ( 
            <section className="section is-medium">
                <div className="columns">
                    <div className="column is-4">
                        <form className="form">
                            <label>What type of food are you craving?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="alias" placeholder="Japanese, Mexican, American, etc."></input>
                            <label>What's your budget?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="budget"></input>
                            <label>Where are you located?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location" placeholder="Zipcode OR city"></input>
                            <a className="button" onClick={this.getData} onClick={this.requestData}>Find me something!</a>
                        </form> 
                    </div>
                </div>
            
            </section>
         );
    }
}
 
export default Search;