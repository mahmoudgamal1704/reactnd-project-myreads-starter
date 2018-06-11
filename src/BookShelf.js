
import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
	filter = (shelf) => {
		return this.props.books.filter((book) => book.shelf === shelf)
	}
	
	render(){	


		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<Book filtredbooks={this.filter(this.props.shelf)} change={this.props.onShelfChange}/>
			</div>

			)
	}
}

export default BookShelf