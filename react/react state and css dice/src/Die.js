import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {

    // let diceFace = `fas fa-dice-${this.props.face}`

        return(
            <div>
                <i className={`die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`} />
            </div>
        )
    }
}

export default Die;