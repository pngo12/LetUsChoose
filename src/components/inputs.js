import React, { Component } from 'react';
import Data from './data'
import RenderOption from './renderoption.js'

class InputForm extends Component {  
    state = {
        chosenEthn: 'No Preference',
        chosenGn: 'No Preference',
        ethnicity: ['No Preference', "Italian", 'Japanese', 'Brazilian', 'American', 'Hawaiian', 'Chinese', 'Vietnamese', 'Greek'],
        genre: ['No Preference', 'Pizza', 'Barbecue', 'Poke', 'Dim Sum', 'Soup/Noodles','Mediterranean', 'Tacos', 'Sandwiches', 'Gyros', 'Kebabs', 'Seafood', 'Rice/Noodles', 'Burgers', 'Breakfast/Brunch'],
        randomChoice: '',
        isHidden: true
    }

    formSubmit = e => {
        e.preventDefault();
    }
    
    toggleHidden = () => {
        this.setState({
            isHidden: false
        })
    }
    
    // The below takes the input, filters the choices, and sets the random choice state to the random restaurant
    randomize = () => {
        const chosenEthnicity = Data.filter(x => this.state.chosenEthn === 'No Preference' ? true : x.ethnicity === this.state.chosenEthn)
        const chosenGenre = Data.filter(x => this.state.chosenGn === 'No Preference' ? true : x.genre === this.state.chosenGn)
        let randomOptions;
        
        if (this.state.chosenEthn === 'No Preference' && this.state.chosenGn !== 'No Preference') {
            randomOptions = chosenGenre;
        } else if (this.state.chosenEthn !== 'No Preference' && this.state.chosenGn === 'No Preference') {
            randomOptions = chosenEthnicity;
        } else {
            randomOptions = [...chosenEthnicity, ...chosenGenre];
        }


        const randomizeOptions = Math.floor(Math.random() * randomOptions.length)
        this.setState({
            randomChoice: randomOptions[randomizeOptions],
        })
    }

    randomAll = () => {
        const random = Data.filter(x => x.ethnicity !== 'No Preference')
        const randomIndex = Math.floor(Math.random() * random.length)
        this.setState({
            randomChoice: random[randomIndex]
        })
    }


    dualOnClick = () => {
        // if (this.state.randomChoice === '') {
        //     this.randomAll()
        //     this.toggleHidden()
        // } else 
        this.randomize()
        this.toggleHidden()
    }

    
    redraw = () => {
        this.setState({
            chosenEthn: '',
            chosenGn: '',
            isHidden: true
        })
    }

    render() {
        return ( 
            <section className="section is-large" id="biggest-container">
            <div className="columns">
                    <div className="column is-4">
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
                        <button className="button is-link is-medium" onClick={this.dualOnClick}>Randomize!</button>
                    </div>
                </form>
                </div>
                {/* The below will render the random restaurant */}
                <div className="column is-1"></div>
            <div className="column is-6">
                {/* This hides the result until random button is clicked */}
                {
                    !this.state.isHidden && <RenderOption 
                    randomChoice={this.state.randomChoice} 
                    />
                }
                </div>
            </div>
    </section>

         );
    }
}
export default InputForm;