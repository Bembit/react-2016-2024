import React, {Component} from 'react';

class Callback extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.SingleKill = this.SingleKill.bind(this);
        this.TripleKill = this.TripleKill.bind(this);
    }

    SingleKill() {
        this.setState({ count: this.state.count + 1});
    }

    // This will only add 1, not 3 as React bundles and checks the last input
    // TripleKill() {
    //     this.setState({ count: this.state.count + 1});
    //     this.setState({ count: this.state.count + 1});
    //     this.setState({ count: this.state.count + 1});
    // }

    // If we want to add 3 times one, we need to use a callback, referencing current state

    // TripleKill() {
    //     this.setState(st => {
    //         return { count: st.count +1}
    //     });
    //     this.setState(st => {
    //         return { count: st.count +1}
    //     });
    //     this.setState(st => {
    //         return { count: st.count +1}
    //     });
    // }

    // REDUX friendly version

    incrementScore(curState) {
        return { count: curState.count + 1};
    }
    TripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return(
            <div>
                {this.state.count}
                <button onClick={this.SingleKill}>SingleKill</button>
                <button onClick={this.TripleKill}>TripleKill</button>
            </div>
        )
    }
}

export default Callback;