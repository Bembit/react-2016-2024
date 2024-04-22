import React, {Component} from 'react';

class Clicker extends Component {
    render() {
        return(
            <button onClick={function(){
                alert('clicked');
            }}
            >
            Click me!
            </button>
        )
    }
}

export default Clicker;