import React from 'react';
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer is-info">
            <div className="content has-text-centered">
                <div className="row">
                    <p className="content has-text-white">
                    ©LUC is built by Kevin Moon, John Park, and Phillip Ngo. This is an open source project.
            Please feel free to <a className="has-text-white" href="https://github.com/pngo12/youpick.git">contribute here</a>, or send us feedback <NavLink className="has-text-white" to='/feedback'>here.</NavLink>
                    </p>
                </div>
            </div>
            <div className="row has-text-centered has-text-white">
            <h2>2850 Red Hill Ave Santa Ana, CA 92705</h2>
            </div>
        </footer>
    );
}

export default Footer;