import React, {Component} from 'react';
import Modal from 'react-responsive-modal'
import {NavLink} from 'react-router-dom'

class Feedback extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        open: false,
    }
    
    onOpenModal = () => {
        this.setState({ open: true})
    }

    onCloseModal = () => {
        this.setState({open:false})
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
        formSubmit = e => {          
          e.preventDefault();
          this.props.addtoFeedback(this.state);
          this.setState({
              name: "",
              email: "",
              subject: "",
              message: "",
      })
            this.onOpenModal();
    }

    render() {
        const { open } = this.state;
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
            <input className="input" type = 'text' placeholder = "First and Last Name" value = {this.state.name} onChange = {this.onChange} name="name" required/>
            </div>

            <label className = "label"> Email </label>
            <div className="control">
                <input className="input" type="email" placeholder="Please enter your email address" value = {this.state.email} onChange = {this.onChange} name="email" required/>
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
                    <textarea className="textarea" placeholder ="Write your message!" value = {this.state.message} onChange = {this.onChange} name="message" required></textarea>
                </div>
            </div>

            <div className = "field is-grouped">
                <div className="control">
                    <button type="submit" className="button is-info"> Submit</button>
                    
                </div>
                <div className="control">
                    <NavLink to='/'><button className="button is-primary">Cancel</button></NavLink>
                </div>
            </div>
            </div>
            <div>
                <Modal open={open} onClose={this.onCloseModal} center >
                    <br />
                    <h1 className="title is-4">Thanks for your feedback!</h1>
                        <p className="content">We'll address your concerns shortly.</p>
                </Modal>
            </div>
            </form>
        </div>
        </div>
    </section>

    )
}
}


export default Feedback;
