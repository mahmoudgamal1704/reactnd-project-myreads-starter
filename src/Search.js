import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
class Search extends React.Component{
	state = {
		filtersBooks:[],
		query:""
	}
	searchbooks = query => {
		if(query){
			let queryresults=[];
			BooksAPI.search(query).then(results => {
				if (results && results.length > 0 ) {
					queryresults=results.map(result => {
						let shelfed = this.props.Books.filter(book => book.id === result.id);
						if (shelfed.length > 0) {result.shelf = shelfed[0].shelf}else{result.shelf='none'}
						return result;
					});
					this.setState({filtersBooks:queryresults})
				}else {
					this.setState({filtersBooks:[]});
				}
				}
			)
		}else {
		this.setState({filtersBooks:[]});
		}
		this.setState({query:query.trim()})
	}
	render(){
			const books = this.state.filtersBooks
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={event => this.searchbooks(event.target.value)}/>
					</div>
				</div>
				<div className="search-books-results">
              		<Book filtredbooks={books} change={this.props.change}/>
    		</div></div>
			)
	}
}
export default Search