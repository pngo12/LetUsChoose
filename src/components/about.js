import React from 'react';
import Navbar from './navbar'

const About = () => {
    return ( 
            <section className="section is-medium">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p><strong>About LUC</strong></p>
                    </div>
                    <div className="column">
                    </div>
                    <div className="column">
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-8">
                        <p className="text-justify">
                            Are you tired of your boo asking you where to eat? Tired of them taking hours just
                            to choose a restaurant? Well, LUC aims to solve that problem. Just let us know a few things about
                            your cravings, and we'll give you a random restauarnt based on your criteria. Now instead of taking
                    hours to choose, you'll have a palce to go within minutes. </p>
                    </div>
                    <div className="column"></div>
                </div>
                <div id="makers" clas="columns">
                    <p><strong>Meet the makers of LUC</strong></p>
                </div>
                <div className="row">
                    <div className="column circle"> <div className="circle"></div></div>
                    <div className="column circle"> <div className="circle"></div></div>
                    <div className="column circle"> <div className="circle"></div></div>
                </div> <br />
                <div className="columns">
                    <div className="column">Phillip Ngo</div>
                    <div className="column">Kevin Moon</div>
                    <div className="column">John Park</div>
                </div>
            </div>
            </section>
     );
}
 
export default About;