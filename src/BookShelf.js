import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Book from './Book.js'

// <option value="currentlyReading">Currently Reading</option>
// <option value="wantToRead">Want to Read</option>
// <option value="read">Read</option>
class BookShelf extends Component {

  state: {
    books: [],
  }

  const insertBook = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.concat([book]),
    }))
  }

  render() {
    const {value, text} = this.props;
    const {books} = this.state;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                key={book.id}
                book={book} />
              ))}
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
