import React, { Component } from 'react';


class Signup extends Component {
    state = { 
        isLoggedIn: false,
        userName: "",
        passWord: "",
        email: ""

     }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
     
    formSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <section class="section is-large">
                    <h1 class="title text-centered">Let's get you signed up</h1>
                    <div className="card">
                        <div className="columns">
                        <div className="column is-half">
                        <form onSubmit={this.formSubmit}>
                            <div className="field">
                                <label className="label">Your Username</label>
                                    <div className="control">
                                        <input className="input is-medium" name="userName" type="text" onChange={this.onChange} value={this.state.userName}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Your Email Address</label>
                                        <div className="control">
                                            <input className="input is-medium" name="passWord" type="password" onChange={this.onChange} value={this.state.email}></input>
                                        </div>
                                    </div>
                                <div className="field">
                                    <label className="label">Your Password</label>
                                        <div className="control">
                                            <input className="input is-medium" name="passWord" type="password" onChange={this.onChange} value={this.state.passWord}></input>
                                        </div>
                                    </div>
                                <button className="button is-info">Sign up!</button>
                        </form><br />
                        <p>Already a user? <a href="#">Login here.</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        );
    }
}

export default Signup;