import React, { Component } from 'react';
import shrug from '../shrug.png';
import About from './about'


const HeroHome = () => {
    return ( 
<section className="hero is-primary is-large">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/> </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item" href={About}>About</a>
            <a className="navbar-item">Give us Feedback</a>
            <a className="navbar-item">FAQ</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
        <h1 className="title is-2">
        Tired of figuring out where to eat?<br /></h1>
        <h2 className="subtitle is-3"> We'll take care of that.</h2>
        <a class="button is-large is-warning is-hovered">Get Started</a></div>
        <div className="column">
          <figure className="">
            <img className='is-horizontal-center' src={shrug} alt="a woman shrugging her hands" />
          </figure>
        </div>
        <div className="column">
          <figure className="">
            <img className='is-pulled-left' src={shrug} alt="a woman shrugging her hands" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

);
}
 
export default HeroHome;