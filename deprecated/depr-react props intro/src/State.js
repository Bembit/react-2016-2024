import React, {Component} from 'react';

class State extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            score: 2,
            gameOver: false
        }
    }

    render() {
        return(
            <div>
                <h2>Your score is: {this.state.score}</h2>
                <h2>{this.props.animal} likes {this.props.food}</h2>
            </div>
        )
    }
}

export default State;