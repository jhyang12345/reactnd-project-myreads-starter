import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  addBookToShelf = (book, value) => {
    book.shelf = value
    for(let bookIn of this.state.books) {
      if(bookIn.id === book.id) return;
    }
    this.setState((prevState) => ({
      books: [...prevState.books, book],
    }))
    console.log(this.state.books);
  }

  moveBookToShelf = (bookFrom, value) => {
    for(let book of this.state.books) {
      if(book.id === bookFrom.id) {
        book.shelf = value;
        break;
      }
    }
    this.setState(this.state);
  }

  filterBooks = (value) => {
    return this.state.books.filter(book => book.shelf === value);
  }

  // <option value="move" disabled>Move to...</option>
  // <option value="currentlyReading">Currently Reading</option>
  // <option value="wantToRead">Want to Read</option>
  // <option value="read">Read</option>
  // <option value="none">None</option>

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  text={"Currently Reading"}
                  value={"currentlyReading"}
                  bookCallback={this.moveBookToShelf}
                  books={this.filterBooks("currentlyReading")}
                  />
                <BookShelf
                  text={"Want to Read"}
                  value={"wantToRead"}
                  bookCallback={this.moveBookToShelf}
                  books={this.filterBooks("wantToRead")}
                  />
                <BookShelf
                  text={"Read"}
                  value={"read"}
                  bookCallback={this.moveBookToShelf}
                  books={this.filterBooks("read")}
                  />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
      <Route exact path='/search' render={({history}) => (
          <SearchBooks bookCallback={(book, value) => {
              this.addBookToShelf(book, value)
              history.push('/')
            }}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
