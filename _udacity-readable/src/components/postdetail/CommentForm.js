import React, { Component } from 'react';

export class CommentForm extends Component {

  render() {
    return(
      <div className="comment__form">
        <form
          onSubmit={this.props.onCommentSubmit}>
            <textarea 
                placeholder="Tell us what you think"
                onChange={this.props.onInputChange} 
                value={this.props.txtComment}
                name="comments" 
                id="" 
                cols="30" 
                rows="5" />
            <input 
              className="comment_button-add"
              value="Comment it"
              type="submit"/>
        </form>
      </div> 
    )
  }
}