import React, { Component } from 'react';
import axios from 'axios';
import Form from './form';
import RenderOption from '../search/renderoption';
import Shrug from '../homepage/images/manshrugging.png';

class Search extends Component {
    state = {
        alias: '',
        location: '',
        data: '',
        toggleOption: false,
        error: false
    }

    requestData = async e => {
        e.preventDefault();
        try {
            console.log("BEFORE AXIOS")
            const receiveRestaurant = await axios.get(`http://localhost:4000/request/${this.state.alias}/${this.state.location}`);
            console.log(receiveRestaurant)
            if (receiveRestaurant !== null || undefined) {
                this.setState({
                    data: receiveRestaurant.data,
                    toggleOption: true
                });
            }
        } catch (error) {
            this.setState({ error: true });
        }
    }

    handleRedraw = () => {
        this.setState({
            alias: '',
            location: '',
            data: '',
            toggleOption: false,
            error: false
        });
    }

    handleErrors = () => {
        this.setState({
            data: '',
            error: false
        });
    }

    convertClock = (fourDigitTime) => {
        let hours24 = parseInt(fourDigitTime.substring(0, 2));
        let hours = ((hours24 + 11) % 12) + 1;
        let amPm = hours24 > 11 ? 'pm' : 'am';
        let minutes = fourDigitTime.substring(2);
        return hours + ':' + minutes + amPm;
    };

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value.toLowerCase() });

    render() {
        let data = this.state.data;
        if (this.state.error) {
            return <section className="section is-large container">
                <div className="columns is-centered is-mobile">
                    <div className="column is-half">
                        <img src={Shrug} alt="a man shrugging" />
                        <p>Sorry about that... Something went wrong.</p>
                        <button className="button" onClick={this.handleErrors}>Try Again</button>
                    </div>
                </div>
            </section>
        }
        return (
            <section className="section is-large container">
                <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column is-8">
                        {
                            this.state.toggleOption
                                ?
                                <RenderOption
                                    name={data.name}
                                    photo={data.photos}
                                    phone={data.display_phone}
                                    street={data.location.address1}
                                    city={data.location.city}
                                    state={data.location.state}
                                    zip={data.location.postal_code}
                                    open={data.hours[0].open.map(x => this.convertClock(x.start))}
                                    close={data.hours[0].open.map(x => this.convertClock(x.end))}
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