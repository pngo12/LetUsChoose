import React, {Component} from 'react';

const Feedback = props => {
    return ( 
        <section className="section is-medium">
        <div class="columns">
        <div className ="column is-4 is-offset-4 feedback-container">
        <div class = "field">
            <label class = "label"> Name</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input" type = 'text' placeholder = "First and Last Name"/>
            <span class = "icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class ="icon is-small is-right">
                <i class = "fas fa-check"></i>
            </span>
            </div>

            <label class = "label"> Email </label>
            <div class="control has-icons-left has icons-right">
                <input class="input" type = "email" placeholder="Please enter your email address"/>
                <span class = "icon is-small is-left">
                    <i class="fas fa envelope"> </i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>

            <label class='label'>Subject</label>
            <div class='control'>
                <div class = "select">
                    <select>
                        <option>Select Dropdown</option>
                        <option> Feedback </option>
                        <option> Webpage design </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <label class="label">Type your Message here!</label>
                <div class="control">
                    <textarea class="textarea" placeholder ="Write your message!"></textarea>
                </div>
            </div>

            <div class = "field is-grouped">
                <div class="control">
                    <button class="button is-primary"> Submit</button>
                </div>
                <div class="control">
                    <button class="button is-danger"> Cancel </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>

    )
}


export default Feedback;