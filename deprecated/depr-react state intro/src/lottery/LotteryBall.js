import React, { Component } from 'react';
import './ball.css';

class LotteryBall extends Component {
    render() {
        return(
            <div className="ball">{this.props.num}</div>
        )
    }
}

export default LotteryBall;