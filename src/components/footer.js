import React from 'react';

const FEEDBACK_PAGE = 'FEEDBACK_PAGE'

const Footer = props => {
    return (
        <footer className="footer is-info">
            <div className="content has-text-centered">
                <div className="row">
                    <p className="content has-text-white">
                    ©LUC is built by Kevin Moon, John Park, and Phillip Ngo. This is an open source project.
            Please feel free to <a className="has-text-white" href="https://github.com/pngo12/youpick.git">contribute here</a>, or send us feedback <a className="has-text-white"
            onClick={() => {props.changePage(FEEDBACK_PAGE)}}>here.</a>
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