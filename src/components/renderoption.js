import React, { Component } from 'react';

const RenderOption = props => {
    return ( 
        <div className="card is-pulled-left has-text-centered">
            <p className="title is-3">We chose {props.randomChoice.name} for you</p>
            <div className="card-image">
                <figure className="image" id="size">
                    <a href={props.randomChoice.link} target= "_blank"><img src={props.randomChoice.photo} alt="a rendering of the random option" /></a>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="media-content">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">The attire is: {props.randomChoice.attire}</p></td>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Is alcohol served? {props.randomChoice.alcohol}</p></td>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Takeout available? {props.randomChoice.takeOut}</p></td>
                                        <td><p className="subtitle is-6 has-text-weight-bold">This restaurant is: {props.randomChoice.budget}</p></td>
                                    </tr>
                                </tbody>
                            </table> 
                            <button className="button is-danger is-normal">Not Happy? Redraw!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default RenderOption;