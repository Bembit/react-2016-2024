import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Title extends Component {

  render() {
    const { id, title, category } = this.props.post
    return(
      <div className="mainpage__title">
        <Link to={`${category}/${id}`}><h3>{title}</h3></Link>
      </div>
    )
  }
}