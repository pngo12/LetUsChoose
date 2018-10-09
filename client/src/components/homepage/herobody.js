import React from 'react';
import shrug from './images/shrug.png';
import manshrugging from './images/manshrugging.png';
import {NavLink} from 'react-router-dom'


const HeroBody = () => {
    return (
    <section className="hero is-primary is-large">
        <div className="hero-body ">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title is-2">
                            Tired of figuring out where to eat?<br /></h1>
                        <h2 className="subtitle is-3"> We'll take care of that.</h2>
                            <NavLink className="button is-large is-info is-hovered" to='/search'>Get Started</NavLink>
                            </div>
                    <div className="column">
                        <figure className="is-horizontal-center">
                            <img src={manshrugging} alt="a man shrugging his hands" />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className=" is-pulled-left">
                            <img src={shrug} alt="a woman shrugging her hands" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
</section>
    );
}

export default HeroBody;