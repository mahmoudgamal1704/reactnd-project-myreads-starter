import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class BooksList extends React.Component {
	render(){
		const shelves = {
		    currentlyReading: ['Currently Reading', 'currentlyReading'],
		    wantToRead: ['Want to Read', 'wantToRead'],
		    read: ['Read', 'read']
	  	}
		return (
			<div className="list-books">
				<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
            		<div>
            			{ Object.keys(shelves).map((shelf) =>
						      <BookShelf key={shelf}
						        shelf={shelves[shelf][1]}
						        title={shelves[shelf][0]}
						        books={ this.props.Books }
						        onShelfChange={ this.props.change }
						      />
    					)}
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