import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchPost, fetchCategories, editPostAction } from '../actions'

class EditPost extends Component {

  state = {
    id: '',
    title: '',
    author: '',
    body: '',
    category: '',
    notValid: false,
    success: false,
    edited: false
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
      .then(() => {
        const { title, author, body, category } = this.props.post.post
        this.setState({
          id,
          title,
          author,
          body,
          category
        })
      })
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  onEditClick = () => {
    const { id, title, category, body, author } = this.state
    this.props.editPost(id, {
      title,
      category,
      body,
      author
    })
    .then(() => {
        this.setState({
          success: true
        })
    })
  }

  render() {
    const { categories } = this.props.categories
    const { id, category } = this.state
    const categoryList = categories.map(category => {
      return (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      )
    })

    return(
      <div className="newpost">
      <h2 className="heading__main">Edit mode - {this.state.title}</h2>
        <div>
          {this.state.success && (
            <Redirect 
              from={`/edit/${category}/${id}`} 
              to={`/${category}/${id}`}  />
          )}
        </div>
        <div>
          {this.state.notValid && (
            <h3>Enter all values</h3> 
          )}
        </div>
        <div className="">
          <div className="">
            <input 
              type="text" 
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title} />
          </div>
        </div>

        <div className="">
          <div>
            <select
              className="select__option--edit"
              onChange={this.onCategoryChange}
              value={this.state.category}>
              {categoryList}
            </select>
          </div>
        </div>

        <div className="">
          <div>
            <textarea 
              value={this.state.body}
              onChange={(e) => this.onBodyChange(e)}
              name="comments" 
              id="" 
              cols="30" 
              rows="8" />
          </div>
        </div>

        <div className="">
          <div>
            <input 
              type="text" 
              onChange={(e) => this.onAuthorChange(e)}
              value={this.state.author} />
          </div>
        </div>

        <div className="">
          <input
            className=""
            type="submit" 
            onClick={this.onEditClick}
            value="Save Changes" />
        </div>
    </div>
    )
  }
}

const mapStateToProps = ({ post, categories }) => {
  return {
    post,
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, post) => dispatch(editPostAction(id, post)),
    getPost: (id) => dispatch(fetchPost(id)),
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)