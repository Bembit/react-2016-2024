import React from 'react';

const Down = (props) => {
  return(
    <div className="skew__it">
    <div 
      className="far fa-thumbs-down"
      onClick={() => props.onClickDownVote(props.id)}>
    </div>
    </div>
  )
}

export default Down;
