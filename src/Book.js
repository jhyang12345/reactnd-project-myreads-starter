import React, {Component} from 'react'

class Book extends Component {
  state = {
    id : '1234',
    coverUrl : 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    bookTitle: "",
    bookAuthors: "",
  }

  // id, authors, title, cover
  render() {
    let {authors, title} = this.props.book;
    const cover = this.props.book.imageLinks.thumbnail;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})`}}></div>
            <div className="book-shelf-changer">
              <select>
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
