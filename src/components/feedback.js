import React, {Component} from 'react';

class Feedback extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    
      onNameChange = e => {
          this.setState({
              name: e.target.value
          });
      }
      onEmailChange = e => {
          this.setState({
               email: e.target.value
          });
      }
      onSubjectChange = e => {
        this.setState({
             subject: e.target.value
        });
    }
    onMessageChange = e => {
        this.setState({
             message: e.target.value
        });
    }
    
    
      formSubmit = e => {
          e.preventDefault();
          this.props.addtoFeedback(this.state);
    
          this.setState({
              name: "",
              email: "",
              subject: "",
              message: ""
          })
      }
    
    render() {
    return ( 
        <section className="section is-medium">
        <div class="columns">
        <div className ="column is-4 is-offset-4 feedback-container">
        <div class = "field">
            <label class = "label"> Name</label>
            <div class="control has-icons-left has-icons-right">
            <input class="input" type = 'text' placeholder = "First and Last Name" value = {this.state.name} onChange = {this.onNameChange}/>
            <span class = "icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class ="icon is-small is-right">
                <i class = "fas fa-check"></i>
            </span>
            </div>

            <label class = "label"> Email </label>
            <div class="control has-icons-left has icons-right">
                <input class="input" type = "email" placeholder="Please enter your email address" value = {this.state.email} onChange = {this.onEmailChange}/>
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
                    <select value = {this.state.subject} onChange = {this.onSubjectChange}>
                        <option value ="Select Dropdown">Select Dropdown</option>
                        <option value = "Feedback"> Feedback </option>
                        <option value = "Webpage Design"> Webpage Design </option>
                    </select>
                </div>
            </div>

            <div class="field">
                <label class="label">Type your Message here!</label>
                <div class="control">
                    <textarea class="textarea" placeholder ="Write your message!" value = {this.state.message} onChange = {this.onMessageChange}></textarea>
                </div>
            </div>

            <div class = "field is-grouped">
                <div class="control">
                    <button class="button is-primary" onClick = {this.formSubmit}> Submit</button>
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
}


export default Feedback;