import React from 'react'
import Books from './Book/Book.js'

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
                <Books books={this.props.books} onSelectionChange={this.onCategorySelectionChanged} />
            </div>
        </div>
    );
}

export default Shelf;