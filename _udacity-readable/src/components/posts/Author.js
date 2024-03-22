import React from 'react';

export const Author = (props) => {
  return(
    <div className="mainpage__author">
      posted by&nbsp;<span>{props.author}</span>
    </div>
  )
}