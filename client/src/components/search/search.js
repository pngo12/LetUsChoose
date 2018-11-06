import React, { Component } from 'react';
import axios from 'axios'
import Form from './form'
import RenderOption from '../search/renderoption'

class Search extends Component {
    state = {
        alias: '',
        location: '',
        data: '',
        toggleOption: false
    }

    requestData = async e => {
        e.preventDefault();
        try {
            const receiveRestaurant = await axios.get(`http://localhost:4000/request/${this.state.alias}/${this.state.location}`, { crossdomain: true })
            console.log("Received Resturant: ", receiveRestaurant);
            this.setState({
                data: receiveRestaurant.data
            });
        } catch (e) {
            console.log("Received receiveRestaurant error: ", e);
        }
        this.setState({ toggleOption: !this.state.toggleOption });
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value.toLowerCase() });

    render() {
        let data = this.state.data;
        return (
            <section className="section is-medium container">
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-8">
                        {
                            this.state.toggleOption
                                ? <RenderOption
                                    name={data.name}
                                    photo={data.photos}
                                    phone={data.display_phone}
                                    address={data.location.formatted_address}
                                    open={data.hours[0].open.map(x => x.start)}
                                    close={data.hours[0].open.map(x => x.end)}
                                    link={data.url}
                                    redraw={this.requestData}
                                />
                                : <Form
                                    submit={this.handleSubmit}
                                    value={this.state.value}
                                    onChange={this.handleOnChange}
                                    inputTextOne='What type of food are you craving?'
                                    inputTextTwo='Where are you located?'

                                />
                            // <form className="form" onSubmit={this.requestData}>
                            //     <label>What type of food are you craving?</label>
                            //     <input className="input" value={this.state.value} onChange={this.handleOnChange} name="alias" placeholder="Japanese, Mexican, etc."></input>
                            //     <label>Where are you located?</label>
                            //     <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location" placeholder="Zipcode OR city"></input>
                            //     <br /><br />
                            //     <input type="submit" value="Find me something!" className="button"></input>
                            // </form>
                        }
                    </div>
                    <div className="column is-2"></div>
                </div>
            </section>
        );
    }
}

export default Search;