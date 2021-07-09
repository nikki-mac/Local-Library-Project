function findAccountById(accounts, id) {
  /* .find() to return the account 
  object that matches the account ID passed in*/
  return accounts.find(account => 
  account.id === id)
}


function sortAccountsByLastName(accounts) {
  /* .toLowerCase() account last name info, 
  and .sort() to sort accounts alphabetically */
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}


function getTotalNumberOfBorrows(account, books) {
    /* for each book borrowed, and for each borrowed
  record of a book, if the given account `ID` matches the `borrows
  ID`, the total is incremented by 1, returning the total
  number of times an account has created a `borrow` record*/
  let total = 0
  books.forEach(book =>  
    (book.borrows.forEach(borrow => { 
      if (account.id === borrow.id) {
      total++
      }
    })))
    return total
}


function getBooksPossessedByAccount(account, books, authors) {
let currentlyCheckedOut = []  //create empty array for checked out books

/* for each book in the `books` array, 
used .find() to find items in the `borrows` array
where the borrows ID matches the account ID
AND that have not been returned (returned === false).
If both of those are true (ID's match and book hasn't been returned)
then push the book into the `currentlyCheckedOut` array */
books.forEach(book => {
  if (book.borrows.find(borrow =>
    borrow.id === account.id && borrow.returned === false)) {
      currentlyCheckedOut.push(book)
    }
})

/* for each book in the `currentlyCheckedOut` array, 
if the author ID in the `authors` array matches 
the `authorId` value in the given `book` object, 
then we embed the matching `author` object 
into the correct/matching `book` object.*/
currentlyCheckedOut.forEach(book => {  
  let author = authors.find(author => 
    author.id === book.authorId) 
/* authors.find() finds the `author` object in `authors` array 
that matches the `authorId` in a specific `book` object. 
This object is then assigned to the variable "author" */
    book.author = author //embeds the found `author` object inside of the correct/matching `book` object. 
})
return currentlyCheckedOut
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
