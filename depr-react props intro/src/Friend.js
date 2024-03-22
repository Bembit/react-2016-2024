import React, { Component } from 'react';

class Friend extends Component {
    render() {

        const {name, hobbies} = this.props

        return(
            <div>
                <h1>{name}</h1>
                <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
            </div>
        )
    }
}

export default Friend;