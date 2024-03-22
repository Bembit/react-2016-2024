import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DropDown extends Component {
    constructor() {
        super()
        this.dropdown = this.dropdown.bind(this);
    }

    dropdown() {
        document.getElementById("dropdown").classList.toggle("show");
    }

    render() {
      
        // const catButtons = [
        //     {
        //       name: 'Portraits'
        //     },
        //     {
        //       name: 'Nature'
        //     },
        //     {
        //       name: 'Weddings'
        //     },
        //     {
        //       name: 'Fashion'
        //     },
        //     {
        //       name: 'Others'
        //     },
        //     {
        //       name: 'Mobile'
        //     },
        //     {
        //       name: 'Contact'
        //     }
        //   ]

        const waypoint_portraits = document.getElementById('Portraits');

        function scrollToWaypointPortraits() {
          waypoint_portraits.scrollIntoView(true);
        }

        const waypoint_Nature = document.getElementById('Nature');

        function scrollToWaypointNature() {
          waypoint_Nature.scrollIntoView(true);
        }

        const waypoint_weddings = document.getElementById('Weddings');

        function scrollToWaypointWeddings() {
          waypoint_weddings.scrollIntoView(true);
        }

        const waypoint_fashion = document.getElementById('Fashion');

        function scrollToWaypointFashion() {
          waypoint_fashion.scrollIntoView(true);
        }

        const waypoint_others = document.getElementById('Others');

        function scrollToWaypointOthers() {
          waypoint_others.scrollIntoView(true);
        }

        const waypoint_mobile = document.getElementById('Mobile');

        function scrollToWaypointMobile() {
          waypoint_mobile.scrollIntoView(true);
        }

        const waypoint_contact = document.getElementById('Contact');

        function scrollToWaypointContact() {
          waypoint_contact.scrollIntoView(true);
        }
        
        return(  
            <div className="navigation__top">
                    <button id="dropdown__btn" onClick={this.dropdown} className="navigation__top-btn" to='#'><svg className="fas fa-bars"></svg></button>
                    <div id="dropdown" className="dropdown__content">
                            <Link className="navigation__nav-item" to="/">Home</Link>
                            <Link className="navigation__nav-item" to="/Search">Search</Link>
                            <Link onClick={scrollToWaypointPortraits} className="navigation__nav-item" to="#">Portraits</Link>
                            <Link onClick={scrollToWaypointNature} className="navigation__nav-item" to="#">Nature</Link>
                            <Link onClick={scrollToWaypointWeddings} className="navigation__nav-item" to="#">Weddings</Link>
                            <Link onClick={scrollToWaypointFashion} className="navigation__nav-item" to="#">Fashion</Link>
                            <Link onClick={scrollToWaypointOthers} className="navigation__nav-item" to="#">Others</Link>
                            <Link onClick={scrollToWaypointMobile} className="navigation__nav-item" to="#">Mobile</Link>
                            <Link onClick={scrollToWaypointContact} className="navigation__nav-item" to="#">Contact</Link>
                    </div>
            </div>
        )
    }
}

export default DropDown;