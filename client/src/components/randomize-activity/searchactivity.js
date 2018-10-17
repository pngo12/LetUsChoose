import React, { Component } from 'react';
import axios from 'axios'
import RenderActivity from './renderactivity'

class SearchActivity extends Component {
    state = {
        alias: '',
        location: '',
        data: ''
    }

    requestData = async e => {
        e.preventDefault();
        try {
            const receiveActivity = await axios.get(`http://localhost:4000/request/${this.state.alias}/${this.state.location}`, { crossdomain: true })
            console.log("Received Activity: ", receiveActivity);
            this.setState({
                data: receiveActivity.data
            });
        } catch (e) {
            console.log("Received receiveActivity error: ", e)
        }
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value.toLowerCase()
        })
    }
    render() {
        let data = this.state.data;
        return (
            <section className="section is-medium">
                <div className="columns container">
                    <div className="column is-4">
                        <form className="form" onSubmit={this.requestData}>
                            <label>What type of activity are you trying to do?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="alias" placeholder="Hiking, Swimming, etc."></input>
                            <label>Where are you located?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location" placeholder="Zipcode OR city"></input>
                            <br /><br />
                            <input type="submit" value="Find me something!" className="button"></input>
                        </form>
                        </div>
                        <div className="column is-2"></div>
                        <div className="column is-6">
                            {
                                data === '' 
                                ? ''
                                : <RenderActivity 
                                    name={data.name}
                                    photo={data.photos}
                                    phone={data.display_phone}
                                    address={data.location.formatted_address}
                                    open={data.hours[0].open.map(x => x.start)}
                                    close={data.hours[0].open.map(x => x.start)}
                                    link={data.url}
                                />
                            }
                        </div>
                    </div>
            </section>
        );
    }
}

export default SearchActivity;