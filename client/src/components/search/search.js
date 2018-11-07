import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import RenderOption from '../search/renderoption';

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
            this.setState({ data: receiveRestaurant.data });
        } catch (e) {
            console.log("Received receiveRestaurant error: ", e);
        }
        this.setState({ toggleOption: true });
    }

    handleRedraw = () => {
        this.setState({
            alias: '',
            location: '',
            data: '',
            toggleOption: false
        })
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value.toLowerCase() });

    render() {
        let data = this.state.data;
        return (
            <section className="section is-large container">
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-8">
                        {
                            this.state.toggleOption
                                ? <RenderOption
                                    name={data.name}
                                    photo={data.photos}
                                    phone={data.display_phone}
                                    street={data.location.address1}
                                    city={data.location.city}
                                    state={data.location.state}
                                    zip={data.location.postal_code}
                                    open={data.hours[0].open.map(x => x.start)}
                                    close={data.hours[0].open.map(x => x.end)}
                                    link={data.url}
                                    redraw={this.requestData}
                                />
                                :
                                <div>
                                    <span className='has-text-centered'><p id="headline">Let's find you something to eat or do</p></span>
                                    <Form
                                        submit={this.requestData}
                                        value={this.state.value}
                                        onChange={this.handleOnChange}
                                        inputTextOne='What are you itching for?'
                                        inputTextTwo='Where are you located?'
                                        placeholder='Japanese, Mexican, hiking, etc.'
                                        locationHolder='City or Zip code'
                                    />
                                </div>
                        }
                    </div>
                    <div className="column is-2"></div>
                </div>
            </section>
        );
    }
}

export default Search;