import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js';
import {Link} from 'react-router-dom'

let currentlyReadingBooks = [];
let wantToReadBooks = [];
let readBooks = [];
let noneBooks = [];

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedBooks: []
        };
    }

    searchBooks = (query) => {
        BooksAPI.search(query).then((result) => {
           if(typeof result === 'undefined'){
            this.setState({
                searchedBooks : this.props.shelfBooks
            })
           }else{
            this.setState({
                searchedBooks : result
            })
           }
        })
            .catch((error) => console.log(error))
    }

    getBooksWithShelves = () => {
        const { shelfBooks } = this.props
        const { searchedBooks } = this.state

        let books = [];
        let isInShelf = false;

        if (searchedBooks.length > 0) {
            const newSearchedBooks = [...searchedBooks];

            newSearchedBooks.forEach((searchedBook) => {
                isInShelf = false;
                shelfBooks.forEach(shelfBook => {
                    if (shelfBook.id === searchedBook.id) {
                        isInShelf = true;
                        books.push(shelfBook)
                        return;
                    }
                });
                if (!isInShelf) {
                    searchedBook.shelf = 'none'
                    books.push(searchedBook)
                }
            });

        }
        return books;
    }

    render() {

        currentlyReadingBooks = [];
        wantToReadBooks = [];
        readBooks = [];
        noneBooks = [];

        let mBooks = this.getBooksWithShelves();

        mBooks.forEach(book => {
            if (book.shelf === 'currentlyReading') {
                currentlyReadingBooks.push(book)
            } else if (book.shelf === 'wantToRead') {
                wantToReadBooks.push(book)
            } else if (book.shelf === 'read') {
                readBooks.push(book)
            } else if (book.shelf === 'none') {
                noneBooks.push(book)
            }
        });

        let searchedBooksGrid = mBooks.map((book) => {
            return (
                 <Book key = {book.id} book = {book} onCategorySelectionChanged={this.props.onCategorySelectionChanged} />
            )
        })

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooksGrid}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search