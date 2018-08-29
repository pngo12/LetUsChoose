import React, { Component } from 'react';

class Input extends Component {
    state = { 

     }
    render() { 
        return ( 
            <form className="container">
                <div className="field">
                    <label className="label">What type of food are you craving?</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Asian</option>
                            <option>Mexican</option>
                            <option>Greek</option>
                            <option></option>

                        {/* <input class="input" type="text" placeholder="Text input"/> */}
                        </select>
                    </div>
                    </div>
                    </div>
                <div className="field">
                    <label className="label">What Genre?</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Asian</option>
                            <option>Mexican</option>
                            <option>Greek</option>
                            <option></option>

                        {/* <input class="input" type="text" placeholder="Text input"/> */}
                        </select>
                    </div>
                    </div>
                    </div>
                <div className="field">
                    <label className="label">What's your budget?</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Asian</option>
                            <option>Mexican</option>
                            <option>Greek</option>
                            <option></option>

                        {/* <input class="input" type="text" placeholder="Text input"/> */}
                        </select>
                    </div>
                    </div>
                    </div>
                <div className="field">
                    <label className="label">Distance from you?</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option>Asian</option>
                            <option>Mexican</option>
                            <option>Greek</option>
                            <option></option>

                        {/* <input class="input" type="text" placeholder="Text input"/> */}
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
 
export default Input;