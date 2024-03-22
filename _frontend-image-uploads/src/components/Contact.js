import React, {Component} from 'react';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            mp4Video: '',
            webmVideo: ''
        }
    }

    render() {

        const contactDetails = [
            {
                description: 'Contact me here'                   
            },
            {
                description: 'My number is'
            },
            {
                description: 'You don\'t have my number'
            },
            {
                description: 'We don\'t know eachother'
            },
            {
                description: 'Anyway it\'s 1-555-BARBER'
            }
        ]

        return(
            <div className="contact">
            {/* leave the contact waypoint ID with  the background video as it is moved 20% from the top */}
                <div id="Contact" className="bg-video">
                    <video className="bg-video__content" muted autoPlay loop>
                        <source src={this.state.mp4Video} type="video/mp4"/>
                        <source src={this.state.webmVideo} type="video/webm" />
                            Your browser doesn't support videos. :(
                    </video>
                </div>
                <div className="contact__details">
                    <h2 className="contact__heading heading">contact</h2>
                    <ul>
                        {contactDetails.map((desc, index) => (
                            <li key={index}>{desc.description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;