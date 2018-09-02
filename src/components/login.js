import React, { Component } from 'react';
import loginData from './logindata'
// import ForgotPassword from './components/recover'

const INPUT_PAGE = "INPUT_PAGE"
const FORGOT_PASSWORD = 'FORGOT_PASSWORD'

class Login extends Component {
    state = { 
        isLoggedIn: false,
        open:false,
        username: '',
        password: ''
     }

     onChange = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }
    
    loginCondition = () => {
        let validateCredentials = loginData.find(x => x.username === this.state.username && x.password === this.state.password) ? true : false
        if (validateCredentials === true ){
            this.props.changePage(INPUT_PAGE)
            this.setState({isLoggedIn: true})
        }  else console.log('wrong username')
    }

    render() { 
        return ( 
            <div className="container">
                <section className="section is-large">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <h1 className="title text-centered">Welcome back!</h1>
                            <form onSubmit={this.loginCondition}>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input className="input is-medium" name="username" type="text" placeholder="iCantChoose52" onChange={this.onChange} value={this.state.username}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input is-medium" name="password" type="password" placeholder="A Secure Password" onChange={this.onChange} value={this.state.password}></input>
                                    </div>
                                </div>
                                <button className="button is-info">Log in</button>
                            </form><br />
                            <p>Forgot your password? <a>Recover it here.</a></p>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Login;