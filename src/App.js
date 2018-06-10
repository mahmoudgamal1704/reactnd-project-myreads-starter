import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import  BooksList  from './BooksList'
import  Search  from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books:[],
    showSearchPage: false
  }
  componentDidMount(){
  	BooksAPI.getAll().then((books) => {
  		this.setState({books})
  	});

  }
  changeShelf = (event,filterbook) => {
    const shelf = event.target.value;
    filterbook.shelf = event.target.value;
    BooksAPI.update(filterbook,shelf).then(() => {
      this.setState(state => ({
        books:state.books.filter(book => book.id !== filterbook.id).concat([filterbook])
      }));
    });
  }
	
  render() {
    return (
    	<div className="app">
    	<Route exact path='/' render={() => (
          <BooksList
            Books={this.state.books}
            change={this.changeShelf}
          />
          )}/>
    	<Route exact path='/search' render={() => (
          <Search
            Books={this.state.books}
            change={this.changeShelf}
          />
          )}/>
    	</div>
    	)
     	
       
    
  }
}

export default BooksApp
