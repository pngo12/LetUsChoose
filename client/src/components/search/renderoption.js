import React from 'react';
import './random.css';

const displayDays = ({ open, close }) => {
    let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    let timeStrings = [];

    for (let i = 0; i < 7; i++) {
        if (open[i]) {
            timeStrings.push(`${days[i]}: ${open[i]} to ${close[i]}`);
        } else {
            timeStrings.push(`${days[i]}: Closed`);
        }
    }
    return timeStrings;
}

const RenderOption = props => {
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
                                        <td><p className="subtitle is-6 has-text-weight-bold">Phone number: <p className="subtitle is-6">{props.phone}</p></p></td>
                                        <td><p className="subtitle is-6 has-text-weight-bold">Address: <p className="subtitle is-6">{props.street}, {props.city} {props.state} {props.zip}</p></p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="subtitle is-6 has-text-weight-bold">Hours: </p>
                                            {displayDays(props).map((time, i) => <p key={i} className="subttitle is-6">{time}</p>)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a onClick={props.redraw} className="button is-danger">Not happy? Redraw.</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderOption;