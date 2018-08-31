import React, {Component} from 'react';
const HOME_PAGE = 'HOME_PAGE'

class Feedback extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    
    thankYouAlert = () => {
     alert("Thank you for your feedback! We will address this shortly!");
    }    

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
      formSubmit = e => {
          e.preventDefault();
          this.props.addtoFeedback(this.state);
          this.thankYouAlert();
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
            <input className="input" type = 'text' placeholder = "First and Last Name" value = {this.state.name} onChange = {this.onChange} name="name"/>
            </div>

            <label className = "label"> Email </label>
            <div className="control">
                <input className="input" type="email" placeholder="Please enter your email address" value = {this.state.email} onChange = {this.onChange} name="email"/>
            </div>

            <label className='label'>Subject</label>
            <div className='control'>
                <div className = "select">
                    <select value = {this.state.subject} onChange = {this.onChange} name="subject">
                        <option value ="Select Dropdown">Select Dropdown</option>
                        <option value = "Feedback"> Feedback </option>
                        <option value = "Webpage Design"> Webpage Design </option>
                    </select>
                </div>
            </div>

            <div className="field">
                <label className="label">Type your Message here!</label>
                <div className="control">
                    <textarea className="textarea" placeholder ="Write your message!" value = {this.state.message} onChange = {this.onChange} name="message"></textarea>
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
