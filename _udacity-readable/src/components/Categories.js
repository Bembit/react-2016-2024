import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {
  
  state = {
    introtitle: 'Welcome to Readable',
    intro: ', the place where we post things that are not stored for the future, because nobody has time for databases at this moment. Go ahead, create a post anyway. "Optimized" for Chrome, 1080p only.'
  }

  componentDidMount() {  
    this.props.getCategories()
  }

  render() { 
    
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Link className="categories__button categories__button-slide" to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    })
    
    return(
      <div className="categories">
      <div className="readable">
        <p><span>{this.state.introtitle}</span>{this.state.intro}</p>
        <h3 className="newpost__btn"><Link className="newpost__btn-link" to="/new">create post</Link></h3>
      </div>
      <h1 className="hero__title"><span className="hero__title-span hero__title-light"><Link to="/">udacity <br /><strong>readable</strong></Link></span></h1>
        <h3 className="mobile__btn"><Link className="nmobile__btn-link" to="/new">create post</Link></h3>
        <ul className="categories__list">
          <All />
          {list}
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link className="categories__button categories__button-slide" to='/'>check all posts</Link>
    </li>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)