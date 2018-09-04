import React from 'react';
import phillip from '../images/phillip.png'
import kevin from '../images/kevin.jpg'
import john from '../images/john.jpg'

const About = () => {
    return ( 
            <section className="section is-small">
            <div className="container">
                <img src='https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&h=350' />
                </div>
            <div className="container about">
                <div className="columns">
                    <div className="column">
                        <p className="title" id="dark-title"><strong>About LUC</strong></p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-8">
                        <p className="text-justify subtitle">
                            Are you tired of your boo asking you where to eat? Tired of them taking hours just
                            to choose a restaurant? Well, LUC aims to solve that problem. Just let us know a few things about
                            your cravings, and we'll give you a random restauarnt based on your criteria. Now instead of taking
                            hours to choose, you'll have a place to go within minutes. </p>
                    </div>
                    <div className="column"></div>
                </div>
                <div id="makers" clas="columns">
                    <p className="subtitle" id="dark-title"><strong>Meet the makers of LUC</strong></p>
                </div>
                <div className="columns">
                </div> <br />
                <div className="columns" id="aboutSection">
                    <div className="column has-text-centered"><figure> <img className="aboutMe" src={phillip} alt="one of the makers of this site."/></figure>Phillip Ngo</div>
                    <div className="column has-text-centered"><figure> <img className="aboutMe" src={kevin} alt="one of the makers of this site."/></figure>Kevin Moon</div>
                    <div className="column has-text-centered"><figure> <img className="aboutMe" src={john} alt="one of the makers of this site."/></figure>John Park</div>
                </div>
            </div>
            </section>
     );
}
 
export default About;