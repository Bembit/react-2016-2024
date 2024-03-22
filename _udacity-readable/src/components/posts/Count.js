import React, { Component } from 'react';

export class Count extends Component {
  render() {
    const { count } = this.props
    return(
      <div className="mainpage__commentcount">
        <i className="far fa-comments"></i> <span>{count}</span>
      </div>
    )
  }
}