import React from 'react';
import HomeBanner from './homebanner';
import HomeAbout from './homeabout';
import HeroBody from './herobody';
import { NavLink } from 'react-router-dom';


const HomeBody = () => {
    return (
        <section>
            <HeroBody />
            <HomeAbout />
            {/* Start full width below */}
            <HomeBanner />
            {/* Start CTA below */}
            <section className="section has-text-centered">
                <h1 className="title" id="dark-title" >Ready to test your LUC?</h1>
                <NavLink className="button is-large is-info is-hovered has-text-white" to='/signup'>Get Started</NavLink>
            </section>
        </section>

    );
}

export default HomeBody;
