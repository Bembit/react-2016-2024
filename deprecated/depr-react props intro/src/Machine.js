import React, { Component } from 'react';

class Machine extends Component {
    render() {

        const {s1,s2,s3} = this.props
        const winner = (s1 === s2) && (s2 === s3);

        const divStyle = {backgroundColor: 'purple', color: 'white'};
        // const winnerStyle = {};
        // const looserStyle = {};

        return(
            <div style={divStyle}>
                <p style={{fontSize: '22px', backgroundColor: 'orange'}}>
                    {s1} {s2} {s3}
                </p>
                <p style={winner ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                    {winner ? 'Winner!' : 'Looser..'}
                </p>
            </div>
        )
    }
}

export default Machine;