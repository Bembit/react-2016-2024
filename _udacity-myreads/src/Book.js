import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {

        const { book, onShelfChange } = this.props
    
        const nopic = "https://cdn.browshot.com/static/images/not-found.png"

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover"
                    style={{ 
                        width: 128, 
                        height: 185, 
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : nopic})`}}>                        
                </div>
                <div className="book-shelf-changer">
                    <select onChange={e => onShelfChange(book, e.target.value)} value={book.shelf ? book.shelf : ''}>
                        <option value="currentlyReading">Move this book to Currently Reading</option>
                        <option value="wantToRead">Move this book to Want to Read</option>
                        <option value="read">Move this book to Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">
                <h2>{book.title}</h2>
                </div>
                <div className="book-authors">
                <h3>{book.authors ? book.authors.join(', '):null}</h3>
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func
}

export default Book;