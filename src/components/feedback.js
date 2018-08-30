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
        <section className="section is-medium" id="is-medium">
        <h1 className ="title-page"> We value your input! </h1>
        <h2 className = "title-page2"> Please let us know what we can do better! </h2>
        <div class="columns">
        <div className ="column is-4 is-offset-4 feedback-container">
        <form onSubmit={this.formSubmit}>
        <div class = "field">
            <label class = "label"> Name</label>
            <div class="control">
            <input class="input" type = 'text' placeholder = "First and Last Name" value = {this.state.name} onChange = {this.onNameChange}/>
            </div>

            <label class = "label"> Email </label>
            <div class="control">
                <input class="input" type = "email" placeholder="Please enter your email address" value = {this.state.email} onChange = {this.onEmailChange}/>
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
                    <button type="submit" class="button is-primary" required = "required" onClick = {this.formSubmit}> Submit</button>
                </div>
                <div class="control">
                    <button class="button is-danger"> Cancel </button>
                </div>
            </div>
            </div>
            </form>
        </div>
        </div>
    </section>

    )
}
}


export default Feedback;
