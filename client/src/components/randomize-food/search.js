import React, { Component } from 'react';
import axios from 'axios'
import RenderOption from './renderoption'

class Search extends Component {
    state = { 
        name: '',
        data: '',
        food: '',
        budget: '',
        location: ''
     }

     getData = () => {
         axios.get('',)
         .then(response => {
             console.log(response.data)
         })
     }

    handleOnChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }     


    render() { 
        return ( 
            <section className="section is-medium">
                <div className="columns">
                    <div className="column is-4">
                        <form className="form">
                            <label>What type of food are you craving?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="food"></input>
                            <label>What's your budget?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="budget"></input>
                            <label>Where are you located?</label>
                            <input className="input" value={this.state.value} onChange={this.handleOnChange} name="location"></input>
                            <a className="button" onClick={this.getData}>Find me something!</a>
                        </form> 
                    </div>
                </div>
            
            </section>
         );
    }
}
 
export default Search;