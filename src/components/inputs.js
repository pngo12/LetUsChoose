import React, { Component } from 'react';

const InputForm = () => { 
        return ( 
            <form className="container">
                <div className="field">
                    <label className="label">What type of food are you craving?</label>
                    <div className="control">
                        <div className="select">
                        <select>
                            <option></option>
                            <option value="Italian">Italian</option>
                            <option>Japanese</option>
                            <option>Brazilian</option>
                            <option>Hawaiian/Japanese</option>
                            <option>Taiwanese</option>
                            <option>Vietnamese</option>

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
                            <option></option>
                            <option>Pizza</option>
                            <option>Japanese</option>
                            <option>Barbecue</option>
                            <option>Poke</option>
                            <option>Dim Sum</option>
                            <option>Soup/Noodles</option>

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
                            <option></option>
                            <option>$</option>
                            <option>$$</option>
                            <option>$$$</option>

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
                            <option></option>
                            <option>Less than 5 miles</option>
                            <option>5 - 10 miles</option>
                            <option>More than 10 miles</option>

                        {/* <input class="input" type="text" placeholder="Text input"/> */}
                        </select>
                    </div>
                </div>
            </div>
                <div className="field">
                    <label className="label">Dine in or Take-out?</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option></option>
                                <option>Dine-In</option>
                                <option>Take-out</option>

                                {/* <input class="input" type="text" placeholder="Text input"/> */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Alcohol?</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option></option>
                                <option>Always</option>
                                <option>Not right now</option>
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
 
export default InputForm;