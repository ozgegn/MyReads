import React, { Component } from "react";
import Shelf from "./Shelf.js";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    let currentlyReading = [];
    let wantToRead = [];
    let read = [];

    this.props.books.forEach(book => {
      if (book.shelf === "currentlyReading") {
        currentlyReading.push(book);
      } else if (book.shelf === "wantToRead") {
        wantToRead.push(book);
      } else if (book.shelf === "read") {
        read.push(book);
      }
    });

    return (
      <div className="book-list">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName="Currently Reading"
              books={currentlyReading}
              onCategorySelectionChanged={this.props.onCategorySelectionChanged}
            />
          </div>
          <div>
            <Shelf
              shelfName="Want To Read"
              books={wantToRead}
              onCategorySelectionChanged={this.props.onCategorySelectionChanged}
            />
          </div>
          <div>
            <Shelf
              shelfName="Read"
              books={read}
              onCategorySelectionChanged={this.props.onCategorySelectionChanged}
            />
          </div>
        </div>
        <Link className="open-search" to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default Main;
