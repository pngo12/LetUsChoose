import React from 'react';
import shocked from '../images/shocked.png';
import manNo from '../images/manNo.png';
import girlNo from '../images/girlNo.png';

const HomeBanner = () => {
    return ( 
        <div className="columns is-gapless">
            <div className="column is-4 has-background-grey is-narrow">
                
                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128">
                        <img src={shocked} />
                    </figure>
                    <h1 className="title title-color">Options got your head exploding?</h1>
                    <p className="content is-pulled-left has-text-white">
                        Don't worry, we know that feeling. 5000 channels yet "nothing" to watch. Too
                                many options leave you overwhelemd. We do the choosing, and you do the eating.</p>
                
                </div>
            </div>
            <div className="column is-4 has-background-grey-dark is-narrow">
                
                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128 is-inline-block">
                        <img src={manNo} />
                    </figure>
                    <figure className="image is-128x128 is-inline-block">
                        <img src={girlNo} />
                    </figure>
                    <h1 className="title">Indecisive group?</h1>
                    <p className="content is-pulled-left has-text-white">If your group of friends are the indecisive type then we're the solution type.
                 LUC isn't just for your boo, it's for the homies too. Let us know what your options are, and we'll randomly choose one.</p>
                </div>
            </div>

            <div className="column is-4 has-background-grey-light is-narrow">

                <div className="container is-fluid">
                    <br />
                    <figure className="image is-128x128">
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/129/right-pointing-magnifying-glass_1f50e.png" />
                    </figure>
                    <h1 className="title">Options got your head exploding?</h1>
                    <p className="content is-pulled-left has-text-white">Don't worry, we know that feeling. 5000 channels yet there's "nothing" to watch. Too
                    many options leave you overwhelemd. So let us do the choosing, and you do the eating.</p>
                </div>
            </div>
        </div>

     );
}
 
export default HomeBanner;