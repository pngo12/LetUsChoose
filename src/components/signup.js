import React, { Component } from 'react';


class Signup extends Component {
    state = { 
        isLoggedIn: false,
        username: "",
        password: "",
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

    success = () => {
        if (this.state.username === 'abc' && this.state.password === 'abc') {

        }
    }


    render() {
        return (
            <div className="container">
                <section class="section is-large">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <h1 class="title text-centered">Let's get you signed up</h1>
                        <form onSubmit={this.formSubmit}>
                            <div className="field">
                                <label className="label">Your username</label>
                                    <div className="control">
                                        <input className="input is-medium" name="username" type="text" onChange={this.onChange} value={this.state.username}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Your Email Address</label>
                                        <div className="control">
                                            <input className="input is-medium" name="email" type="email" onChange={this.onChange} value={this.state.email}></input>
                                        </div>
                                    </div>
                                <div className="field">
                                    <label className="label">Your password</label>
                                        <div className="control">
                                            <input className="input is-medium" name="password" type="password" onChange={this.onChange} value={this.state.password}></input>
                                        </div>
                                    </div>
                                <button className="button is-info">Sign up!</button>
                        </form><br />
                        <p>Already a user? <a href="#">Login here.</a></p>
                        </div>
                    </div>
            </section>
        </div>
        );
    }
}

export default Signup;