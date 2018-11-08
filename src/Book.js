import React, {Component} from 'react'

class Book extends Component {

  bookCallback = (evt) => {
    const {value} = evt.target;
    this.props.bookCallback(this.props.book, value);
    console.log("book selected");
  }

  // id, authors, title, cover
  render() {
    let {selectedState, book} = this.props;
    let {authors, title} = this.props.book;
    let cover;
    if(this.props.book.imageLinks) {
      cover = this.props.book.imageLinks.thumbnail;
    } else {
      cover = null;
    }
    console.log(title, selectedState);
    if(!selectedState) selectedState = "none"
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})`}}></div>
            <div className="book-shelf-changer">
              <select value={selectedState} onChange={this.bookCallback}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.join(", ")}</div>
        </div>
      </li>
    )
  }
}

export default Book

// allowAnonLogging: false
// authors: (2) ["Mike Hendrickson", "Brian Sawyer"]
// averageRating: 4
// canonicalVolumeLink: "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ"
// categories: ["Computers"]
// contentVersion: "preview-1.0.0"
// description: "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference."
// id: "bUybAgAAQBAJ"
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=bUybAgAAQ…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=bUybAgAAQ…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 240
// previewLink: "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2010-04-27"
// publisher: ""O'Reilly Media, Inc.""
// ratingsCount: 3
// readingModes: {text: false, image: false}
// subtitle: "The Guide for Discriminating Downloaders"
// title: "Best Android Apps"
