import React from 'react';
import HomeBanner from './homebanner'
import HomeAbout from './homeabout'
const SIGNUP_PAGE = 'SIGNUP_PAGE'

const HomeBody = props => {
    return ( 
            <section>
            <HomeAbout />
            {/* Start full width below */}
            <HomeBanner />
            {/* Start CTA below */}
            <section className="section has-text-centered">
                <h1 className="title" id="dark-title" >Ready to test your LUC?</h1>
                    <a className="button is-large is-info is-hovered has-text-white" 
                    onClick={() => {
                        props.changePage(SIGNUP_PAGE)
                    }}>Get Started</a>
            </section>
 </section>
            
     );
}
 
export default HomeBody;
