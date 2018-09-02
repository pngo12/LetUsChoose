import React, { Component } from 'react';

const HOME_PAGE = 'HOME_PAGE'
const ABOUT_PAGE = 'ABOUT_PAGE'
const FEEDBACK_PAGE = 'FEEDBACK_PAGE'
const SIGNUP_PAGE = 'SIGNUP_PAGE'

class Navbar extends Component {
  state = {
    toggleOn: false
  }

  toggleOpen = () => {
    this.setState({ toggleOn: !this.state.toggleOn })
  }

  render() {
    let burgerClass = ['navbar-menu'];
    if (this.state.toggleOn) {
      burgerClass.push('is-active')
    }

    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" onClick={() => {
              this.props.changePage(HOME_PAGE)
            }}>
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA" onClick={this.toggleOpen}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className={burgerClass.join(' ')}>
            <div className="navbar-end">
              <a className="navbar-item" onClick={() => {
                this.props.changePage(HOME_PAGE)
              }} >Home</a>
              <a className="navbar-item" onClick={() => {
                this.props.changePage(ABOUT_PAGE)
              }} >About</a>
              <a className="navbar-item" onClick={() => {
                this.props.changePage(FEEDBACK_PAGE)
              }} >Give Us Feedback</a>
              <a className="navbar-item" onClick={() => {
                this.props.changePage(SIGNUP_PAGE)
              }}>Login/Signup</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}



export default Navbar;