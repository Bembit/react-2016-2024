import React from 'react';

const Up = (props) => {
  return(
    <div className="skew__it">
    <div 
      className="far fa-thumbs-up"
      onClick={() => props.onClickUpVote(props.id)}>
    </div>
    </div>
  )
}

export default Up;
