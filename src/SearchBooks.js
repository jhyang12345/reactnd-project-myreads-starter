import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book.js'
import {search} from './BooksAPI'

class SearchBooks extends Component {
  state = {
    searchText: "",
    searchResults : [],
  }

  handleInputChange = (evt) => {
    const {value} = evt.target;
    this.setState({
      searchText : value.trim(),
    })
    search(value)
      .then((books) => {
        if(Array.isArray(books)) {
          this.setState(() => ({
            searchResults : books,
          }))
        }
      })
  }

  render() {
    const {searchText, searchResults} = this.state;
    const {bookCallback} = this.props;
    const selectedState = "none";
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
              onChange={this.handleInputChange}
              value={searchText}/>
          </div>
          <Link to="/">Close</Link>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.map((book) => (
              <Book
                bookCallback={bookCallback}
                key={book.id}
                selectedState={selectedState}
                book={book} />
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
