import React, { Component } from 'react';
import './box.css';
import { choice } from '../coin/Helpers';

class Box extends Component {

    constructor(props) {
        super(props);

        this.state = {color: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }

// can get the same colors 

    // pickColor() {
    //     let newColor = choice(this.props.allColors);
    //     this.setState({color: newColor});
    // }

    pickColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
        
        this.setState({ color: newColor });
    }

    handleClick() {
        this.pickColor();
    }

    render() {
        return(
            <div className="box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
                
            </div>
        )
    }
}

export default Box;