import React, { Component } from 'react';
import logo from '../images/LUC.png'
import { NavLink } from 'react-router-dom'

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
            <a className="navbar-item">
              <img src={logo} alt="Logo for the website"/>
                </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA" onClick={this.toggleOpen}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className={burgerClass.join(' ')}>
            <div className="navbar-end">
              <NavLink className="navbar-item" to='/'>Home</NavLink>
              <NavLink className="navbar-item" to='/about'>About</NavLink>
              <NavLink className="navbar-item" to='/feedback'>Give us Feedback</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;