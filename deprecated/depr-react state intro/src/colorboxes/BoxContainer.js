import React, { Component } from 'react';
import Box from './Box';
import './box.css';


class BoxContainer extends Component {

    static defaultProps = {
        numBoxes: 18,
        allColors: [
            'green',
            'magenta',
            'blue',
            'black',
            'yellow',
            'red'
        ]
    };

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors} /> 
        ));
        return <div className="boxcontainer"> {boxes} </div>
    }
}

export default BoxContainer;