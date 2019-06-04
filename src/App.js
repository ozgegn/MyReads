import React, { Component } from 'react'
import './App.css';
import * as BooksAPI from './BooksAPI'
import Main from './Main.js'
import { Route } from 'react-router-dom'
import Search from './Search';

class App extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((result) => {
                this.setState({
                    books: result
                })
            })
    };

    onCategorySelectionChanged = (event, book) => {
        const newShelf = event.target.value;
        let newBookList = [];

        BooksAPI.update(book, newShelf)
            .then((result) => {
                if (result != null) {
                    newBookList = this.state.books.map((oldBook) => {
                        if (oldBook.id === book.id) {
                            book.shelf = newShelf
                            return book
                        }
                        return oldBook;
                    })
                }
                this.setState({
                    books: newBookList
                })
            }).catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="App">
            <Route exact path="/" render = {() => (
                <Main books = {this.state.books} onCategorySelectionChanged = {this.onCategorySelectionChanged} />
            )}  />
            <Route path="/search" render = {() => (
                <Search onCategorySelectionChanged = {this.onCategorySelectionChanged} shelfBooks = {this.state.books} />
            )} />
            </div>
        );
    }
}

export default App;