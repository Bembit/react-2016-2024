import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

class Header extends Component {
    render() {

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
            <div className="header hero">
                <h1 className="hero__title"><span className="hero__title-span hero__title-light">Photos <br /><strong>landing</strong></span></h1>
                <div className="desktop">
                    <Link className="navigation__nav-item ani__delay-1" to="/">Home</Link>
                    <Link className="navigation__nav-item ani__delay-2" to="/Search">Search</Link>
                    <Link onClick={scrollToWaypointPortraits} className="navigation__nav-item ani__delay-3" to="#">Portraits</Link>
                    <Link onClick={scrollToWaypointNature} className="navigation__nav-item ani__delay-4" to="#">Nature</Link>
                    <Link onClick={scrollToWaypointWeddings} className="navigation__nav-item ani__delay-5" to="#">Weddings</Link>
                    <Link onClick={scrollToWaypointFashion} className="navigation__nav-item ani__delay-6" to="#">Fashion</Link>
                    <Link onClick={scrollToWaypointOthers} className="navigation__nav-item ani__delay-7" to="#">Others</Link>
                    <Link onClick={scrollToWaypointMobile} className="navigation__nav-item ani__delay-8" to="#">Mobile</Link>
                    <Link onClick={scrollToWaypointContact} className="navigation__nav-item ani__delay-9" to="#">Contact</Link>
                </div>
                <div className="mobile">
                    <DropDown />
                </div>
                <Link className="allphotos allphotos__slide" to="/Search">All photos</Link>
            </div>
        )
    }
}

export default Header;