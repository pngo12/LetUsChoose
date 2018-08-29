import React from 'react';
import Navbar from './navbar'

const About = () => {
    return ( 
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <p><strong>About LUC</strong></p>
                    </div>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm">
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <p class="text-justify">
                            Are you tired of your boo asking you where to eat? Tired of them taking hours just
                            to choose a restaurant? Well, LUC aims to solve that problem. Just let us know a few things about
                            your cravings, and we'll give you a random restauarnt based on your criteria. Now instead of taking
                    hours to choose, you'll have a palce to go within minutes. </p>
                    </div>
                    <div class="col"></div>
                </div>
                <div id="makers" clas="row">
                    <p><strong>Meet the makers of LUC</strong></p>
                </div>
                <div class="row">
                    <div class="col"><div class="circle"></div></div>
                    <div class="col"><div class="circle"></div></div>
                    <div class="col"><div class="circle"></div></div>
                </div> <br />
                <div class="row">
                    <div class="col">Phillip Ngo</div>
                    <div class="col">Kevin Moon</div>
                    <div class="col">John Park</div>
                </div>
            </div>
        </div>
     );
}
 
export default About;