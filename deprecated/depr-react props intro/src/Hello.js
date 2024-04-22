import React, { Component } from 'react';

class Hello extends Component {

    static defaultProps = {
        from: 'Anonymus',
        bangs: 99
    }

    render() {

        let bangs = "!".repeat(this.props.bangs);

        return(
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
            </div>
        )
    }
}

export default Hello;