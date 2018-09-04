import React from 'react';
import shocked from '../images/shocked.png';
import thinking from '../images/thinking.png';
import food from '../images/food.png'

const HomeBanner = () => {
    return ( 
        <div className="columns is-gapless">
            <div className="column is-4 has-background-grey is-narrow" id="banner">
                
                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128">
                        <img src={shocked} alt="an emoji with his head exploding"/> 
                    </figure>
                    <h1 className="title title-color">Options got your head exploding?</h1>
                    <p className="content is-pulled-left has-text-white">
                        Don't worry, we know that feeling. 5000 channels yet "nothing" to watch. Too
                        many options leave you overwhelmed. We do the choosing, and you do the eating.</p>
                
                </div>
            </div>
            <div className="column is-4 has-background-grey-dark is-narrow" id="banner">
                
                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128">
                        <img src={thinking} alt="an emoji thinking about his options"/>
                    </figure>

                    <h1 className="title">Indecisive group?</h1>
                    <p className="content is-pulled-left has-text-white">If your group of friends are the indecisive type then we're the solution type.
                 LUC isn't just for your boo, it's for the homies too. Let us know what your options are, and we'll randomly choose one.</p>
                </div>
            </div>

            <div className="column is-4 has-background-grey-light is-narrow" id="banner">

                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128">
                        <img src={food} alt="an emoji of a pan of food, it closely resembles paella"/>
                    </figure>
                    <h1 className="title">Not Just Food.</h1>
                    <p className="content is-pulled-left has-text-white">LUC is more than just food. If you're looking for something to do, rest assured, we'll help you decide.</p>
                </div>
            </div>
        </div>

     );
}
 
export default HomeBanner;