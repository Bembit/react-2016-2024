import React, {Component} from 'react';

class Coin extends Component {
    render() {

    var style = {
        width: '150px'
    };

        return(
            <div>
                <img style={style} src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin;