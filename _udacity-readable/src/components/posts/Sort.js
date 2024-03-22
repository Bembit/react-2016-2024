import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSortAction } from '../../actions';

class Sort extends Component {

  onChangeSort = (e) => {
    this.props.changeSort(e.target.value)
  }

  render() {
    return(
      <div className="mainpage__sort">
      <h2 className="heading__main">posts feed by</h2>
        <select
          className="select__option"
          onChange={this.onChangeSort}
          name="sort"
          id="sort">
          <option value="popular">Hot</option>
          <option value="date">New</option>
          <option value="unpopular">Disliked</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (value) => dispatch(changeSortAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);