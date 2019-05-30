import React, { Component } from 'react'
import './App.css';
import Book from './Book/Book.js'
import * as BooksAPI from './Book/BooksAPI.js'
import { Container, Button, darkColors, lightColors } from 'react-floating-action-button'
import Shelf from './Shelf/Shelf.js'

class App extends Component {

    state = {
        books: [],
        currentlyReadingbooks: [],
        wantToReadBooks: [],
        readBooks: [],
        bookCategory: 0
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((result) => {
                this.setState({
                    books: result
                })
                console.log(result)
            }
            )
    };

    onCategorySelectionChanged = (event, books) => {
        const status = event.target.value
        BooksAPI.update(books, status)
            .then((result) => {
                console.log(result)
                this.setState({
                    currentlyReadingbooks: result.currentlyReading,
                    wantToReadBooks: result.wantToRead,
                    readBooks: result.read
                })
            }).catch((error) => console.log(error))
    }

    render() {
        console.log(this.state.books[0])
        return (
            <div className="App">
                <div className="book-list">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf shelfName = 'Currently Reading' books = {this.state.books} />
                        </div>
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Container>
                            <Button
                                tooltip="Add Book"
                                styles={{ backgroundColor: darkColors.lighterRed, color: lightColors.white }}
                                icon="fas fa-plus"
                                onClick={() => alert('FAB Rocks!')}
                            />
                        </Container>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;