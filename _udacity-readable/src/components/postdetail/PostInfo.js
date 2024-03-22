import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect  } from 'react-router-dom';

import Vote from '../vote';

import { upVotePostAction, downVotePostAction, removePostAction } from '../../actions';

class PostInfo extends Component {
  
  state = {
    deleted: false
  }

  onDelete = (id) => {
    this.props.removePost(id)
      .then(() => {
        this.setState({
          deleted: true
        })
      })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render() {
    const { id, author, body, category, title, voteScore, timestamp } = this.props.post

    if (this.state.deleted) {
      return (<Redirect to='/' />)
    } else {
      return(
        <div className="post__info">
          <div className="post__info-vote">
            <Vote 
              id={id}
              score={voteScore}
              onClickUpVote={this.onClickUpVote} 
              onClickDownVote={this.onClickDownVote} />
          </div>
          <div className="post__info-container">
          <div className="post__info-heading--container">
            <h2 className="heading__main">{title}</h2>
          </div>  
            <div className="post__info-misc">
              <span><b>Posted on</b> {timestamp} by <b>{author}</b></span>
            </div>
            <div className="post__info-category">
              <span><b>in: </b>{category}</span>
            </div>
            <div className="post__info-body">
              <p>{body}</p>
            </div>
            <div className="post__info-category--container">
              <div className="post__info__edit-delete--container">
                <div className="post__info__edit-delete">
                  <div className="mainpage__delete">
                    <Link to={`/edit/${id}`}>Edit</Link>
                  </div>
                  <div 
                    onClick={() => this.onDelete(id)}
                    className="mainpage__delete">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVotePostAction(id)),
    downVote: (id) => dispatch(downVotePostAction(id)),
    removePost: (id) => dispatch(removePostAction(id))
    
  }
}

export default connect(null, mapDispatchToProps)(PostInfo);
