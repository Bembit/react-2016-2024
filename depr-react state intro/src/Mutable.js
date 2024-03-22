import React, { Component } from 'react';

class Mutable extends Component {

    static defaultProps = {
        options: [
            "anchor",
            "angry",
            "archive",
            "at",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "couch",
        ]
    };

    constructor(props) {
        super(props);
        this.state = { icons: [] };
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];

        this.setState({ icons: [...this.state.icons, newIcon]});

    }

    render() {

        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);

        return(
            <div>
                <h3>Icons: {icons}</h3>
                <button onClick={this.addIcon}>Add a new icon</button>
            </div>
        )
    }
}

export default Mutable;