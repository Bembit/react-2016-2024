import React, {Component} from 'react';
import Coin from './Coin';

import { choice } from './Helpers';

class Flipper extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61Zvg0P3qKL._SL1500_.jpg'},
            {side: 'tails' ,imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61gFVopuJEL._SL1500_.jpg'}
        ]
    };

    constructor(props) {
        super(props);

        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);

        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            }
            if(newCoin.side === "heads") {
                newState.nHeads += 1;
            } else {
                newState.nTails += 1;
            }
            return newState
        });
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return(
            <div>
                <h3>Flip a coin</h3>
                {/* if it's not null like the starting value, render the component */}
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default Flipper;