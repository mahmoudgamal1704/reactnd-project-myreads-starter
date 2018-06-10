import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
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
              		<ol className="books-grid">
              		{books.length > 0 && (
						books.map(book => (
							<li key={book.id}> 
							<div className="book">
								<div className="book-top">
									<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
									<div className="book-shelf-changer">
										<select name='shelf' value = {book.shelf} onChange={e => this.props.change(e,book)}>
											<option value="move" disabled>Move to...</option>
			                                <option value="currentlyReading">Currently Reading</option>
			                                <option value="wantToRead">Want to Read</option>
			                                <option value="read">Read</option>
			                                <option value="none">None</option>
		                                </select>
	                                </div>
                                </div>
                                <div className="book-title">{book.title}</div>
             					<div className="book-authors">{book.authors}</div>
         					</div>
						</li>)))}
              		</ol>
        		</div>
    		</div>
			)
	}
}
export default Search