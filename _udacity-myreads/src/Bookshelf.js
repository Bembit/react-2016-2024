import React, {Component} from 'react';

import * as BooksAPI from './BooksAPI';

import Shelf from './Shelf';

class Bookshelf extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books
            })
        })
    }

    onShelfChange = (book, shelf) => {
        const id = book.id
        const searchedBooks = [...this.state.books]
        const updateIndex = searchedBooks.findIndex(book => book.id === id)
        const updateBook = Object.assign({}, searchedBooks[updateIndex], { shelf: shelf });
    
        this.setState({ books: [...searchedBooks.slice(0, updateIndex), updateBook, ...searchedBooks.slice(updateIndex + 1)]
        })
        BooksAPI.update(book, shelf)
    }

    render() {
        const { books } = this.state
        let currentlyReading = [];
        let wantToRead = [];
        let read = [];

        books.forEach(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    currentlyReading.push(book)
                    break
                case 'wantToRead':
                    wantToRead.push(book)
                    break
                case 'read':
                    read.push(book)
                    break
                default:
                    break
            }
        })

        const shelfTitles = [
            {
                name: "Currently Reading",
                books: currentlyReading
            },
            {
                name: "Want To Read",
                books: wantToRead
            },
            {
                name: "Read",
                books: read
            }
        ]

        return(
            <div className="list-books-content">
                <div>
                    {shelfTitles.map((individualShelf, index) => (
                        <Shelf key={index} title={individualShelf.name} books={individualShelf.books} onShelfChange={this.onShelfChange} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Bookshelf;