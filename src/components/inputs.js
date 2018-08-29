import React, { Component } from 'react';

class InputForm extends Component {  
    state = {
        chosenEthn: '',
        chosenGn: '',
        ethnicity: ["Italian", 'Japanese', 'Brazilian', 'Hawaiian', 'Taiwanese', 'Vietnamese'],
        genre: ['Pizza', 'Ramen', 'Barbecue', 'Poke', 'Dim Sum', 'Soup/Noodles']
    }

    formSubmit = e => {
        e.preventDefault();
    }
    
    render() {
        return ( 
            <form className="container" onSubmit={this.formSubmit}>
                <div className="field">
                    <label className="label">What type of food are you craving?</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.chosenEthn} onChange={e => { this.setState({ chosenEthn: e.target.value })}}>
                            {this.state.ethnicity.map(x => <option key={x} value={x}> {x}</option>)}
                        </select>
                    </div>
                </div>
            </div>
                <div className="field">
                    <label className="label">What Genre?</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.chosenGn} onChange={e => {this.setState({chosenGn: e.target.value})}}>
                        {this.state.genre.map(x => <option key={x} value={x}> {x}</option>)}
                        </select>
                    </div>
                </div>
            </div>
                    <div className="control">
                        <button className="button is-link">Randomize!</button>
                    </div>
                </form>
         );
    }
}
export default InputForm;