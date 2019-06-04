import React, { Component } from "react";
import Book from "./Book.js";

class Shelf extends Component {
  render() {
    let shelfBooks = this.props.books.map(book => {
      return (
        <Book
          key={book.id}
          book={book}
          onCategorySelectionChanged={this.props.onCategorySelectionChanged}
        />
      );
    });
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{shelfBooks}</ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
