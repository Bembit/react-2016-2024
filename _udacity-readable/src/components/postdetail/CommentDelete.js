import React, { Component } from 'react';

class CommentDelete extends Component {
  
  onDelete = () => {
    const id = this.props.id
    this.props.onDelete(id) 
  }

  render() {
    return(
      <div className="comment-delete">
        <input
          onClick={this.onDelete} 
          type="submit" 
          value="Delete"/>
      </div>
    )
  }
}

export default CommentDelete;