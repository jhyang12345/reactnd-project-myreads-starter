import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Book from './Book.js'

// <option value="currentlyReading">Currently Reading</option>
// <option value="wantToRead">Want to Read</option>
// <option value="read">Read</option>
class BookShelf extends Component {


  render() {
    const {value, text, books, bookCallback} = this.props;
    return (
      <div className="bookshelf" key={value}>
        <h2 className="bookshelf-title">{text}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Book
                key={book.id}
                book={book}
                bookCallback={bookCallback}
                selectedState={value}
                 />
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
