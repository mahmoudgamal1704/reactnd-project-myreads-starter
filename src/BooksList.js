import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BooksList extends React.Component {
	
	render(){
		const currentRead = this.props.Books.filter((book) => book.shelf === "currentlyReading")
		const wantRead = this.props.Books.filter((book) => book.shelf === "wantToRead")
		const exactRead = this.props.Books.filter((book) => book.shelf === "read")
		return (
			<div className="list-books">
				<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
            		<div>
            			<div className="bookshelf">
            				<h2 className="bookshelf-title">Currently Reading</h2>
            				<Book filtredbooks={currentRead} change={this.props.change}/>
						</div>
						<div className="bookshelf">
            				<h2 className="bookshelf-title">Want To Read</h2>
            				<Book filtredbooks={wantRead} change={this.props.change}/>
						</div>
						<div className="bookshelf">
            				<h2 className="bookshelf-title">Read</h2>
            				<Book filtredbooks={exactRead} change={this.props.change}/>
						</div>
					</div>
				</div>
				<div className="open-search">
              		<Link to="/search">Add a book</Link>
           		 </div>
			</div>
		)
	}
}
export default BooksList