import React, { Component } from 'react';

const FEEDBACK_PAGE = 'FEEDBACK_PAGE'

const Footer = props => {
    return (
        <footer className="footer is-info">
            <div className="content has-text-centered">
                <div className="row">
                    <p>
                    © <strong>LUC</strong> is built by Kevin Moon, John Park, and Phillip Ngo. This is an open source project.
            Please feel free to <a href="https://github.com/pngo12/youpick.git">contribute here</a>, or send us feedback <a
            onClick={() => {
                props.changePage(FEEDBACK_PAGE)
            }}
            >here.</a>
                    </p>
                </div>
            </div>
            <div className="row has-text-centered">
            <h2>2850 Red Hill Ave Santa Ana, CA 92705</h2>
            </div>
            <div className="row has-text-centered">
            <h2>714-555-5555</h2>
            </div>
        </footer>
    );
}

export default Footer;