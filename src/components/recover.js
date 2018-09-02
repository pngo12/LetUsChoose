import React, { Component } from 'react';

const ForgotPassword = () => {
    return ( 
        <div className="container">
            <section className="section is-large">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title text-centered">Forgot your password?</h1>
                        <form onSubmit={}>
                            <div className="field">
                                <label className="label">Your Email Address</label>
                                <div className="control">
                                    <input className="input is-medium" name="email" type="email" placeholder="example@example.com" onChange={}></input>
                                </div>
                            </div>
                            <button className="button is-info">Reset my password</button>
                        </form><br />
                    </div>
                </div>
                {/* <Modal open={open} onClose={this.onCloseModal} center >
                    <br /><br />
                    <p className="content">Please check your inbox for reset instructions.</p>
                </Modal> */}
            </section>
        </div>
     );
}
 
export default ForgotPassword;