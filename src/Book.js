import React, { Component } from "react";

class Book extends Component {
  render() {
    const book = this.props.book;
    let isThumbnailExist =
      typeof book.imageLinks !== "undefined" ? true : false;
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: isThumbnailExist
                  ? `url(${book.imageLinks.thumbnail})`
                  : null
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={event =>
                  this.props.onCategorySelectionChanged(event, book)
                }
                defaultValue={book.shelf}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors !== undefined ? book.authors[0] : "No Author"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
