import React, { Component } from 'react';
import Data from './data'

class InputForm extends Component {  
    state = {
        chosenEthn: '',
        chosenGn: '',
        ethnicity: ["Italian", 'Japanese', 'Brazilian', 'Hawaiian', 'Taiwanese', 'Vietnamese', 'No Preference'],
        genre: ['Pizza', 'Ramen', 'Barbecue', 'Poke', 'Dim Sum', 'Soup/Noodles', 'No Preference']
    }

    formSubmit = e => {
        e.preventDefault();
    }

    randomize = () => {
        const chosenEthnicity = Data.find(x => x.ethnicity === this.state.chosenEthn)
        const chosenGenre = Data.find(x => x.genre === this.state.chosenGn)
        
        console.log(chosenEthnicity, chosenGenre)

        const randomOptions = [chosenEthnicity, chosenGenre]
        const randomizeOptions = Math.floor(Math.random() * randomOptions.length)

        console.log(randomizeOptions)

        if (randomizeOptions === 0) {
            console.log(randomOptions[0])
        } else console.log(randomOptions[1])
    }



    
    render() {
        return ( 
            <section className="section is-large">
            <div className="columns">
                    <div className="column is-5">
            {/* Begin Form below */}
            <form className="is-pulled-right" onSubmit={this.formSubmit}>
                <div className="field">
                    <label className="label is-size-5">What type of food are you craving?</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.chosenEthn} onChange={e => { this.setState({ chosenEthn: e.target.value })}}>
                            {this.state.ethnicity.map(x => <option key={x} value={x}> {x}</option>)}
                        </select>
                    </div>
                </div>
            </div>
                <div className="field">
                    <label className="label is-size-5">What Genre?</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.chosenGn} onChange={e => {this.setState({chosenGn: e.target.value})}}>
                        {this.state.genre.map(x => <option key={x} value={x}> {x}</option>)}
                        </select>
                    </div>
                </div>
            </div>
                    <div className="control">
                        <button className="button is-link is-medium" onClick={this.randomize}>Randomize!</button>
                    </div>
                </form>
                </div>

                {/* The below will render the random restaurant */}
                <div className="column is-1"></div>
            <div className="column is-7">
                <div className="card is-pulled-left">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <div className="media-content">
                                    <p className="title is-4">This is the restaurant Name</p>
                                    <p className="subtitle is-6">This is the restaurant details</p>
                                    <div className="content">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

         );
    }
}
export default InputForm;