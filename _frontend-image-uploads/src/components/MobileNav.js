import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MobileNav extends Component {
    render() {
        return(

            <div className="navigation__mobile">
                <Link className="navigation__mobile-item" to="/">Home</Link>
                <Link className="navigation__mobile-item" to="/Search">Search</Link>
                <Link className="navigation__mobile-item" to="#">Top</Link>
                <Link className="navigation__mobile-item" to="#">Bottom</Link>
            </div>

        )
    }
}

export default MobileNav;