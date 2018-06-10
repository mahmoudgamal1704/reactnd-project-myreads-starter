import React from 'react'

class Book extends React.Component {
	render(){
		return(
			<div className="bookshelf-books">
				<ol className="books-grid">
					{this.props.filtredbooks.length > 0 && 
					this.props.filtredbooks.map(book => (<li key={book.id}> 
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
					</li>))}
				</ol>
			</div>
		)
	}
}
export default Book