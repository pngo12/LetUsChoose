import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer is-info">
            <div className="content has-text-centered">
                <div className="row">
                    <p className="content has-text-white">
                    ©LUC is built by Kevin Moon, John Park, and Phillip Ngo. This is an open source project.
            Please feel free to <a className="has-text-white" href="https://github.com/pngo12/youpick.git">contribute here</a>, or send us feedback <Link className="has-text-white" to='/feedback'>here.</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;