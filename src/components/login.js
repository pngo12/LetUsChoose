import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import loginData from './logindata'

class Login extends Component {
    state = { 
        success: false,
        open:false,
        username: '',
        password: '',
        redirect: false
     }

     onChange = e => {
         this.setState({[e.target.name]: e.target.value})}
    
    loginCondition = e => {
        e.preventDefault()
        let validateCredentials = loginData.filter(x => x.username === this.state.username && x.password === this.state.password).length > 0;
        console.log(validateCredentials);
        if (validateCredentials === true){
            this.setState({success:true})
        }

    }

    render() { 
        if(this.state.success === true){
            return <Redirect to='/food' />
        }
        return ( 
            <section className="section is-large" id="loginSection">
                <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title text-centered">Welcome back!</h1>
                        <form onSubmit={this.loginCondition}>
                            <div className="field">
                                <label className="label has-text-white">Username</label>
                                <div className="control">
                                    <input className="input is-medium" name="username" type="text" placeholder="iCantChoose52" onChange={this.onChange} value={this.state.username}></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-white">Password</label>
                                <div className="control">
                                    <input className="input is-medium" name="password" type="password" placeholder="A Secure Password" onChange={this.onChange} value={this.state.password}></input>
                                </div>
                            </div>
                            <button type="submit" className="button is-info">Log in</button>
                        </form><br />
                        <p className="content has-text-white">Forgot your password? <a>Recover it here.</a></p>
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
 
export default Login;