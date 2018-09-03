import React from 'react';
import HomeBanner from './homebanner'
const SIGNUP_PAGE = 'SIGNUP_PAGE'

const HomeBody = props => {
    return ( 
            <section className="section is-medium">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <h1 className="title has-text-centered" id="black">What's LUC?</h1>
                            <p className="content">
                                If you've ever felt plagued by too many options, then LUC (Let us Choose) aims to solve that problem. Instead of spending hours on figuring out what to eat, where to eat, or<br/> what to do,
                            let LUC decide for you. You'll discover new restaurants, new things to do, and best of all, you'll no struggle to answer the age old question of: <strong>What do you want to eat?</strong>
                            </p>
                        </div>
                    </div>
                </div>
            
                {/* Start full width below */}

            <HomeBanner />
            
            {/* Start CTA below */}
            <section className="section has-text-centered">
                <h1 className="title">Ready to test your LUC?</h1>
                    <a className="button is-large is-warning is-hovered" 
                    onClick={() => {
                        props.changePage(SIGNUP_PAGE)
                    }}>Get Started</a>
            </section>
        
 </section>
            
     );
}
 
export default HomeBody;
