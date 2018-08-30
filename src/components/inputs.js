import React, { Component } from 'react';
import Data from './data'
import RenderOption from './renderoption.js'

class InputForm extends Component {  
    state = {
        chosenEthn: '',
        chosenGn: '',
        ethnicity: ['',"Italian", 'Japanese', 'Brazilian', 'Hawaiian', 'Taiwanese', 'Vietnamese', 'No Preference'],
        genre: ['','Pizza', 'Ramen', 'Barbecue', 'Poke', 'Dim Sum', 'Soup/Noodles', 'No Preference'],
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

    randomize = () => {
        const chosenEthnicity = Data.find(x => x.ethnicity === this.state.chosenEthn)
        const chosenGenre = Data.find(x => x.genre === this.state.chosenGn)
        const randomOptions = [chosenEthnicity, chosenGenre]
        const randomizeOptions = Math.floor(Math.random() * randomOptions.length)
        
        console.log(chosenEthnicity, chosenGenre)
        console.log(randomizeOptions)
        console.log(randomOptions[randomizeOptions])
        this.setState({
            randomChoice: randomOptions[randomizeOptions]
        })
    }
    dualOnClick = () => {
        this.randomize()
        this.toggleHidden()
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
                        <button className="button is-link is-medium" onClick={this.dualOnClick}>Randomize!</button>
                    </div>
                </form>
                </div>
                {/* The below will render the random restaurant */}
                <div className="column is-1"></div>
            <div className="column is-7">
                {/* Render Random Option Here */}
                {
                !this.state.isHidden && <RenderOption randomChoice={this.state.randomChoice} />
                }
                
            </div>
        </div>
    </section>

         );
    }
}
export default InputForm;