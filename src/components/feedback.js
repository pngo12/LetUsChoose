import React, {Component} from 'react';
const HOME_PAGE = 'HOME_PAGE'
const ABOUT_PAGE = 'ABOUT_PAGE'
const FEEDBACK_PAGE = 'FEEDBACK_PAGE'


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
        <div className="columns">
        <div className ="column is-4 is-offset-4 feedback-container">
        <form onSubmit={this.formSubmit}>
        <div className = "field">
            <label className = "label"> Name</label>
            <div className="control">
            <input className="input" type = 'text' placeholder = "First and Last Name" value = {this.state.name} onChange = {this.onNameChange}/>
            </div>

            <label className = "label"> Email </label>
            <div className="control">
                <input className="input" type="email" placeholder="Please enter your email address" value = {this.state.email} onChange = {this.onEmailChange}/>
            </div>

            <label className='label'>Subject</label>
            <div className='control'>
                <div className = "select">
                    <select value = {this.state.subject} onChange = {this.onSubjectChange}>
                        <option value ="Select Dropdown">Select Dropdown</option>
                        <option value = "Feedback"> Feedback </option>
                        <option value = "Webpage Design"> Webpage Design </option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="label">Type your Message here!</label>
                <div className="control">
                    <textarea className="textarea" placeholder ="Write your message!" value = {this.state.message} onChange = {this.onMessageChange}></textarea>
                </div>
            </div>

            <div className = "field is-grouped">
                <div className="control">
                    <button type="submit" className="button is-primary"> Submit</button>
                </div>
                <div className="control">
                    <button className="button is-danger"onClick={() => {this.props.changePage(HOME_PAGE)}}> Cancel </button>
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
