import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {

    static defaultProps = {
        title: "Lottery",
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
// set the initial state not to be an empty array, so we see some inital blank balls
        this.state = { nums : Array.from({length: this.props.numBalls}) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        // map over state nums and generate a random number between 1-40 for each
        this.setState(curState => ({
            nums: curState.nums.map(n => 
                    Math.floor(Math.random() * this.props.maxNum) + 1
                )
        }));    
    }

    handleClick() {
        this.generate();
    }

    render() {
        return(
            <section className="">
                <h2>{this.props.title}</h2>

                <div className="lottery">
                    {this.state.nums.map(n => (
                        <LotteryBall num={n} />
                    ))}
                </div>
               
                <button onClick={this.handleClick}>
                    Generate
                </button>

            </section>
        )
    }
}

export default Lottery;