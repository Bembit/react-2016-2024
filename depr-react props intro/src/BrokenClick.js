import React, {Component} from 'react';

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({
            clicked: !false
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click me first</button>
            </div>
        )
    }
}

export default BrokenClick;