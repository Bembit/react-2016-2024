import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Bookstore extends Component {
    state = {
        books: [],
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            const bookId = books.map(book => ({ id: book.id, shelf: book.shelf }))
            this.setState({searchedBooks: bookId})
        })
    }

    onShelfChange = (book, shelf) => {
        const updatedBooks = []
        BooksAPI.update(book, shelf).then(books => {
            Object.keys(books).forEach(shelf => {
                return books[shelf].map(id => ({ id: id, shelf: shelf })).forEach(book => {
                    updatedBooks.push(book)
                })
            })
            return updatedBooks
        }).then(updatedBooks => {
            this.setState({ searchedBooks: updatedBooks })
        })
    }

    onBookSearch = (event) => {
        if(event.target.value) {
            BooksAPI.search(event.target.value).then(books => {
                if(!books || books.hasOwnProperty('error')) {
                    this.setState({books: [] })
                } else {
                    this.setState({ books: books })
                }
            })
        } else {
            this.setState({ books: [] })
        }
    }

    render() {

        const { books, searchedBooks } = this.state
        let main

        if(books.length > 0) {
            main = books.map((book, index) => {
                searchedBooks.forEach(currentbook => {
                    if(currentbook.id === book.id) {
                        book.shelf = currentbook.shelf
                    }
                })

                return(
                    <li key={index}>
                    <Book onShelfChange={this.onShelfChange} book={book} />
                    </li>
                )
            })
        } else {
            main = null
        }

        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="search here" onChange={this.onBookSearch}/>
                </div>
                </div>
                <div className="search-books-results">
                <div className="books-grid">
                    {main}
                </div>
                </div>
            </div>
        )
    }
}

export default Bookstore;