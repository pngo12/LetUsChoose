import React, { Component } from 'react';

const RenderOption = props => {
    return ( 
        <div className="card is-pulled-left">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="media-content">
                            <p className="title is-4">This is the restaurant Name</p>
                            <p className="subtitle is-6">This is the restaurant details</p>
                            <div className="content">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default RenderOption;