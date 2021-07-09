function getTotalBooksCount(books) {
/* used .reduce() to find the total number of `book` objects
in the `books` array. */
  let total = 0
    return books.reduce((books) => books + 1, total)
}


function getTotalAccountsCount(accounts) {
/* used .reduce() to find the total number of `account` objects
in the `accounts` array */
  let total = 0
  return accounts.reduce(accounts => accounts + 1, total)
}


function getBooksBorrowedCount(books) {
/* used .filter() and .find() to create an array of books
that are currently borrowed/have not been returned, then 
returned the length of that array to get the total number
of books currently borrowed/not returned. */
  let totalCurrentlyBorrowed = books.filter((book) => 
  book.borrows.some((booksBorrowed) => 
  booksBorrowed.returned === false))
  return totalCurrentlyBorrowed.length
}


//helper function for getMostCommonGenres, getMostPopularBooks, and getMostPopularAuthors
//sorts array by highest `count` value, and limits array to contain 5 items or less using .slice()
function sortAndSlice(arr) {
  let result = arr.sort((inputA, inputB) =>
  inputB.count - inputA.count).slice(0, 5)
  return result
}


function getMostCommonGenres(books) {
  let genres = [] //create a genres array
  books.forEach(book => {
    const match = genres.find(genre =>
      genre.name === book.genre) //for each book in the `books` array, find the book `genre` that matches the `name` key in `genres` array
      if (match) { //if the book `genre` matches an existing genre `name` in the `genres` array...
        match.count++ //increment the matching `count` value by 1.
      } else {
        const name = book.genre
        genres.push({name, count: 1})
      }//if there is no matching genre `name`, push a new object into the `genres` array containing the new `name` and `count` of 1 info
  })
  genres = sortAndSlice(genres) //helper function
  return genres
}
  /*ALTERNATIVE WITHOUT HELPER FUNCTION:
  genres.sort((genreA, genreB) =>
  genreA.count < genreB.count ? 1 : -1).slice(0, 5) 

- .sort() sorts `titleAndCount` array by popularity (value of `count`)
- .slice() limits the array to only contain 5 objects or fewer */



function getMostPopularBooks(books) {
  let titleAndCount = [];
  books.forEach((book) => {
    const popularBooksArray = { name: book.title, count: book.borrows.length }
    titleAndCount.push(popularBooksArray) //pushes objects with titles and amount of borrows into the `titleAndCount` array
  })
  titleAndCount = sortAndSlice(titleAndCount) //helper function
  return titleAndCount
}
  /*ALTERNATIVE WITHOUT HELPER FUNCTION:
  titleAndCount.sort((titleAndCountA, titleAndCountB) => 
  titleAndCountB.count - titleAndCountA.count).slice(0, 5) 

- .sort() sorts `titleAndCount` array by popularity (value of `count`)
- .slice() limits the array to only contain 5 objects or fewer */



function getMostPopularAuthors(books, authors) {
  let popularAuthors = books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  })
  popularAuthors = sortAndSlice(popularAuthors) // helper function
  return popularAuthors
}
  /*ALTERNATIVE WITHOUT HELPER FUNCTION: 
  popularAuthors.sort((a, b) => 
  b.count - a.count).slice(0,5) 
  
- .sort() sorts the array by popularity (value of `count`)
- .slice() limits the array to only contain 5 objects or fewer */



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
