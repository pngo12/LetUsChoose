import React from 'react';


const RenderActivity = props => {
    return (
        <div className="card is-pulled-left has-text-centered">
            <p className="title is-3" id="dark-title">We chose {props.name} for you</p>
            <div className="card-image">
                <figure className="image" id="size">
                    <a href={props.link} target="_blank">
                        <img src={props.photo} alt="a rendering of the random option" />
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="media-content">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Phone number: {props.phone}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Address: {props.address}</p></td>
                                    </tr>
                                    <tr>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Open: {props.open}</p></td>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Close: {props.close}</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderActivity;