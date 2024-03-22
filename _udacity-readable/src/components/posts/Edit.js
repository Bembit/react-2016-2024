import React from 'react';
import { Link } from 'react-router-dom';

export const Edit = (props) => {
  return(
    <div className="mainpage__edit">
      <Link to={`/edit/${props.id}`}><p className="mainpage__edit-skew">Edit</p></Link>
    </div>
  )
}