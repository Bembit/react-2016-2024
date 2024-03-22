import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="footer__content">
                    <div className="footer__content-copyright">
                        <h5>&copy; Copyright 2017-2018, <a href="/">Me</a><br /> <a href="https://www.madbence.com">Me me</a></h5>
                    </div>
                    <div className="footer__content-links">
                        <div>
                            <h3>About</h3>
                            <ul>
                                <li>Info</li>
                                <li>Contact</li>
                                <li>Hire me</li>
                                <li>Something</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Social</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>WhatsApp</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;