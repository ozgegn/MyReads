import React, { Component } from 'react'


class Books extends Component {
    render() {
        const books = this.props.books
        const bookListItem = books.map((book) =>
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.props.onSelectionChange(event, this.props.books) } value={this.props.bookCategory} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors != undefined ? book.authors[0] : 'No Author'}</div>
                </div>
            </li>
        )
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookListItem}
                </ol>
            </div>
        );
    }
}

export default Books