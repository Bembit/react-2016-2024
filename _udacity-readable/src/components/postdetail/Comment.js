import React , { Component } from 'react';
import CommentEdit from './CommentEdit';
import CommentDelete from './CommentDelete';

class Comment extends Component {
  
  state = {
    comment: ''
  }

  onEdit = (id, editId) => {
    this.props.onEdit(id, editId, this.state.comment)
  }

  onDelete = (id) => {
    this.props.onDelete(id)
  }

  componentDidMount() {
    const { body } = this.props
    this.setState({
      comment: body
    })
  }

  onChangeComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  render() {
    if(this.props.editId === this.props.id) {
      return(
        <div className="comment">
          <div className="comment__body">
            <textarea
              rows="5" 
              onChange={this.onChangeComment} 
              value={this.state.comment}
              type="text" />
          </div>
          <div className="comment--edit-delete">
            <CommentEdit 
              id={this.props.id} 
              edit={this.props.edit}
              editId={this.props.editId} 
              onEdit={this.onEdit} />
          </div>
        </div>
      )
    } else {
      return(
        <div className="comment">
          <div className="">
            {this.state.comment}
          </div>
          <div className="comment--edit-delete">
            <CommentEdit 
              id={this.props.id} 
              editId={this.props.editId} 
              onEdit={this.props.onEdit}/>  
            <CommentDelete 
              id={this.props.id} 
              onDelete={this.props.onDelete}/>
          </div>
        </div>
      )
    }
  }
  
}

export default Comment;