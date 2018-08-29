import React, { Component } from 'react';

const HOME_PAGE = 'HOME_PAGE'
const ABOUT_PAGE = 'ABOUT_PAGE'
const FEEDBACK_PAGE = 'FEEDBACK_PAGE'

const Navbar = props => {
  return (
        <nav className="navbar is-primary">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" /> </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" onClick={() => {
                  props.changePage(HOME_PAGE)
                }} >Home</a>
                <a className="navbar-item" onClick={() => {
                  props.changePage(ABOUT_PAGE)
                }} >About</a>
                <a className="navbar-item" onClick={() => {
                  props.changePage(FEEDBACK_PAGE)
                }} >Give Us Feedback</a>
              </div>
            </div>
          </div>
        </nav>

  );
}

export default Navbar;