import React from 'react';

export const Delete = (props) => {
  return(
    <div className="mainpage__delete">
      <a className="mainpage__delete-skew" onClick={() => props.onDeleteClick(props.id)} 
      >
      <p>Delete</p>
      </a>
    </div>
  )
}