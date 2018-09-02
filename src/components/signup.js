import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Modal from 'react-responsive-modal'

const LOGIN_PAGE = "LOGIN_PAGE"
const INPUT_PAGE = "INPUT_PAGE"

class Signup extends Component {
    state = { 
        isSignedUp: false,
        username: "",
        password: "",
        email: "",
        open: false,
     }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    formSubmit = e => {
        e.preventDefault()
        this.props.changePage(INPUT_PAGE)
    }

    success = (e) => {
        if (this.state.username !== '' && this.state.password !== '' && this.state.email !== '') {
                e.preventDefault()
                this.props.changePage(INPUT_PAGE)
                this.setState({isSignedUp: true})
        } else if (this.state.username === '' || this.state.password === '' || this.state.email === '') {
            e.preventDefault()
            this.onOpenModal()
        }
    } 

    render() {
        const { open } = this.state
        // let button;
        return (
            <div className="container">
                <section className="section is-large">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <h1 className="title text-centered">Let's get you signed up</h1>
                        <form onSubmit={this.success}>
                            <div className="field">
                                <label className="label">Your username</label>
                                    <div className="control">
                                        <input className="input is-medium" name="username" type="text" placeholder="indecisiveEater10" onChange={this.onChange} value={this.state.username}></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Your Email Address</label>
                                        <div className="control">
                                            <input className="input is-medium" name="email" type="email" placeholder="example@example.com"onChange={this.onChange} value={this.state.email}></input>
                                        </div>
                                    </div>
                                <div className="field">
                                    <label className="label">Your password</label>
                                        <div className="control">
                                            <input className="input is-medium" name="password" type="password" placeholder="A Secure Password" value={this.state.password}></input>
                                        </div>
                                    </div>

                                    {/* {
                                    this.state.noBlank === true ? button = <SignupButtonBlocked /> : button= <SignupSuccessButton />
                                    } */}

                                 <button className="button is-info">Sign up!</button>
                        </form><br />
                            <p>Already a user? <a onClick={() => {
                                this.props.changePage(LOGIN_PAGE)}}>Login here.</a></p>
                        </div>
                    </div>
                    <Modal open={open} onClose={this.onCloseModal} center >
                        <br /><br />
                        <p className="content">Please complete all the fields.</p>
                    </Modal>
            </section>
        </div>
        );
    }
}

export default Signup;