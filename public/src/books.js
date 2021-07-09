function findAuthorById(authors, id) {
/*used .find() to find the specific author object
matching the ID passed in */
  return authors.find(author =>
    author.id === id)
}


function findBookById(books, id) {
/*used .find() to find the specific book object
matching the ID passed in */
  return books.find(book =>
    book.id === id)
}


function partitionBooksByBorrowedStatus(books) {
  const totalBooks = [] //array to contain the `returned` and `notReturned` arrays
  const notReturned = books.filter(book =>
    !book.borrows[0].returned) //creates an array of books not returned (returned === false)
    const returned = books.filter(book =>
      book.borrows[0].returned) //creates an array of books returned (returned === true)
      totalBooks.push(notReturned) //pushes `notReturned` array into `totalBooks` array
      totalBooks.push(returned) //pushes `returned` array into `totalBooks` array
      return totalBooks //returns `totalBooks` array containing the above two arrays.
}


function getBorrowersForBook(book, accounts) {
  const { borrows } = book
  const borrowers = borrows.map(({ id, returned })=> { //borrows.map() creates the array...
    const account = accounts.find(account => 
      account.id === id) //finds `account` object with an ID value that matches the `borrows` ID value
    return {
      ...account,
      returned,
    }
  }) 
  /* through .map() and .find(), 
  `borrowers` now holds the value of an array of objects, 
  with each object containing the matching 
  `account` object and `returned` info */

  return borrowers.slice(0, 10); //limits the array to 10 objects or less.
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
