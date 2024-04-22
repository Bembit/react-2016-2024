import React, { Component } from 'react';

class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.genRandom = this.genRandom.bind(this);
    }
    genRandom() {
        // pick random number 1-10
        let rand = Math.floor(Math.random() * 10) + 1;
        // update state with new random
        this.setState({ num: rand })
    }
    render() {
        return(
            <div>
                <h1>number is: {this.state.num}</h1>
                {/* conditionally render h2 if result is 7 */}
                {this.state.num === 7 
                    ? <h2>YOU WIN</h2>
                    : <button onClick={this.genRandom}>generate random number</button>
                }
            </div>
        )
    }
}

export default StateClicker;