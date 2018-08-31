import React, { Component } from 'react';
import shrug from '../images/shrug.png';
import manshrugging from '../images/manshrugging.png';
const SIGNUP_PAGE = 'SIGNUP_PAGE'


const HeroBody = props => {
    return (
    <section className="hero is-primary is-large">
        <div className="hero-body ">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title is-2">
                            Tired of figuring out where to eat?<br /></h1>
                        <h2 className="subtitle is-3"> We'll take care of that.</h2>
                        <a className="button is-large is-warning is-hovered" onClick={() => {
                            props.changePage(SIGNUP_PAGE)
                        }}
                        >Get Started</a></div>
                    <div className="column">
                        <figure className="">
                            <img className='is-horizontal-center' src={manshrugging} alt="a man shrugging her hands" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="">
                            <img className='is-pulled-left'  src={shrug} alt="a woman shrugging her hands" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
</section>
    );
}

export default HeroBody;