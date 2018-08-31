import React from 'react';
import shocked from '../images/shocked.png';
import manNo from '../images/manNo.png';
import girlNo from '../images/girlNo.png';
const SIGNUP_PAGE = 'SIGNUP_PAGE'

const HomeBody = props => {
    return ( 
            
            <section className="section is-medium is-clear-fix" id="big-section">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column is-three-fifths is-offset-one-fifth">
                        <h1 className="title has-text-centered">What's LUC?</h1>
                            <p className="content">
                                If you've ever felt plagued by too many options, then LUC (Let us Choose) aims to solve that problem. Instead of spending hours on figuring out what to eat, where to eat, or<br/> what to do,
                            let LUC decide for you. You'll discover new restaurants, new things to do, and best of all, you'll no struggle to answer the age old question of: <strong>What do you want to eat?</strong>
                            </p>
                        </div>
                    </div>
                    <section className="section is-small"></section>
                    <div className="columns">
                        <div className="column is-5">
                            <figure className="image is-128x128"><img src={shocked} /></figure>
                            <h1 className='is-pulled-left title'>Options got your head exploding?</h1><br/>
                            <p className="content is-pulled-left">Don't worry, we know that feeling.
                            5000 channels yet there's "nothing" to watch. Too many options leave you overwhelemd.
                            So let us do the choosing, and you do the eating.</p>
                        </div>
                        <div className="column is-7"></div>
                    </div>
                <div className="columns">
                    <div className="column is-7"></div>
                        <div className="column is-5">
                            <div className="columns">
                                <div className="column">
                                    <figure className="image is-128x128 is-inline-block is-pulled-right"><img src={manNo} /></figure>
                                        <figure className="image is-128x128 is-pulled-right"><img src={girlNo} /></figure>
                                    </div>
                                </div>
                            <h1 className='is-pulled-right title'>Indecisive bunch are ya?</h1><br />
                        <p className="content is-pulled-right">If your group of friends are the indecisive type then we're the solution type.
                        LUC isn't just for your boo, it's for the homies too. Let us know what your options are, and we'll randomly choose one.</p>
                    </div>
                </div>
            
            
            <section className="section has-text-centered">
                <h1 className="title">Ready to test your LUC?</h1>
                    <a className="button is-large is-warning is-hovered" 
                    onClick={() => {
                        props.changePage(SIGNUP_PAGE)
                    }}>Get Started</a>
            </section>
        
        </div>
 </section>
            
     );
}
 
export default HomeBody;