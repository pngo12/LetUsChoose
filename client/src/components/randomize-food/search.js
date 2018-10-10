import React, { Component } from 'react';
import axios from 'axios'
// import RenderOption from './renderoption'


class Search extends Component {
    state = {
        alias: '',
        location: ''
    }

    requestData = async () => {
        try {
            const receiveRestaurant = await axios.get(`http://localhost:4000/request/${this.state.alias}/${this.state.location}`, { crossdomain: true })
            console.log("Received Resturant: ", receiveRestaurant.data);
        } catch (e) {
            console.log("Received receiveRestaurant error: ", e)
        }
    }

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
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="alias" placeholder="Japanese, Mexican, etc."></input>
                            <label>Where are you located?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location" placeholder="Zipcode OR city"></input>
                            <a className="button" onClick={this.requestData}>Find me something!</a>
                        </form>
                        <div className="column is-4">
                            {/* build a component or have data here  */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;