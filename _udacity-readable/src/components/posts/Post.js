import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePostAction, upVoteAction, downVoteAction } from '../../actions';

import Vote from '../vote/';
import { Title } from './Title';
import { Author } from './Author';
import { Count } from './Count';
import { Edit } from './Edit';
import { Delete } from './Delete';

class Post extends Component {
  state = {
    score: 0,
    avatar: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100'
  }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      score: this.state.score + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({
      score: this.state.score - 1
    })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      score: voteScore
    })
  }

  render() {
    
    const { author, id } = this.props.post  
    const { score } = this.state
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'
    return(  
      <div className="mainpage__post__wrapper">
        <Vote 
          id={id}
          score={score}
          onClickDownVote={this.onClickDownVote}
          onClickUpVote={this.onClickUpVote} />
        <div className="mainpage__postinfo-container">
          <div className="mainpage__postinfo-title">
            <Title post={this.props.post} />
              <div className="mainpage__postinfo-postinfo">
                <div className="mainpage__postinfo-user">
                  <div className="mainpage__avatar">
                    <img src={this.state.avatar} alt="default user profile"/>
                  </div>
                  <Author author={author} />
                  <Count count={count} />
                </div>
                <div className="mainpage__buttons">  
                  <Edit id={id} />
                  <Delete id={id} onDeleteClick={this.onDeleteClick}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
