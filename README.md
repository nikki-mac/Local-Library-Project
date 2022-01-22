
# 📚 Local Library
⭐ **JavaScript Project for Thinkful's Software Engineering program** ⭐

❗ **Project Prompt:** 

Your neighborhood has decided to put together a local library where people can lend and borrow books. One of the most important features needed to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program.

Other people are taking care of the logistics and design, but they need you to build the algorithms!

This project is designed to test your ability to work with large datasets and build algorithms based on those datasets.
Before taking on this project, you should be comfortable with the learning objectives listed below:

- Using Visual Studio Code as a text editor
- Differentiating between the three most common JavaScript error types
- Solving bugs by using error messages
- Differentiating between ```let```, ```const```, and ```var```, and using each appropriately
- Creating an array from a string based on particular criteria and joining arrays into strings
- Writing strings that embed expressions using template literals
- Accessing all the values and keys of an object
- Using ```find()```, ```filter()```, ```map()```, ```some()```, and ```every()``` to solve different problems
- Using ```reduce()``` to solve different problems
- Using ```sort()``` to sort arrays in various ways

You are tasked with building a number of different algorithms that will help complete an administrative site for a local library. All of the functions will work on three common datasets. The datasets are related, and at times, you will need to work with multiple datasets to solve the problem at hand.

### Datasets
There are three datasets that are a part of this project: ```accounts```, ```authors```, and ```books```.

#### Accounts
You can view all of the accounts data inside of the ```public/data/``` directory. Each account is an object with the following shape:
```
{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}
```
An account represents a person who is registered with the library. Accounts can take out and return books.

#### Authors
You can view all of the authors data inside of the ```public/data/``` directory. Each author is an object with the following shape:
```
{
  "id": 0,
  "name": {
    "first": "Lucia",
    "last": "Moreno"
  }
}
```
An author represents someone who wrote one or more books in the library.

**Note:** Author's IDs are set to be numbers, whereas the other two datasets use string IDs.

#### Books
You can view all of the books data inside of the ```public/data/``` directory. Each book is an object with the following shape:
```
{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}
```
Each book represents a physical book but also contains additional information. In particular:

- The ```authorId``` matches up with an author. It represents who wrote the book.
- The ```borrows``` array is a list of transactions that have occurred with this book. For example, the above book has been borrowed three times.
    - The ```id``` for each "borrow" record matches with an account ID. In the above example, the account with an ID of ```"5f446f2e2a4fcd687493a775"``` has not yet returned the book, meaning they still are in possession of it.



## 💻 Tech Stack

- JavaScript
- HTML
- CSS


## 🌟 Demo

🌟[Click here for live demo](https://local-library-project-eta.vercel.app/)🌟


## 🖥 Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 📈 Running Tests

To run tests, run the following command

```bash
  npm run test
```


## 📓 Project Requirements and Acceptance Criteria
### Project Rubric
For your project to pass, all the following statements must be true:

- All tests are passing in Qualified
- The project doesn't include any single-letter variables.
- The project makes at least one use of an arrow function.
- The project makes at least one use of each of the following native array methods: ```find()```, ```filter()```, ```map()```, and ```reduce()```.
- The project employs at least one helper function, which helps support the tested functions.
- The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and ```for/in``` loops.

### Account functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/11c23e4622a87eab216668be31c759ac-image.png)

#### findAccountById()

The `findAccountById()` function in `public/src/accounts.js` has two parameters, in the following order:

- An array of accounts.
- An ID of a single account.

It returns the account object that has the matching ID.

**Example:**

```javascript
findAccountById(accounts, "5f446f2ecfaf0310387c9603");
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/
```

#### sortAccountsByLastName()

The `sortAccountsByLastName()` function in `public/src/accounts.js` has a single parameter:

- An array of accounts.

It returns a sorted array of objects. The objects are sorted alphabetically by last name.

**Example:**

```javascript
sortAccountsByLastName(accounts);
/*
  [
    {
      "name": {
        "first": "Kirby",
        "last": "Alston"
      },
      ...
    },
    {
      "name": {
        "first": "Toni",
        "last": "Ball"
      },
      ...
    },
  ]  
*/
```

#### getTotalNumberOfBorrows()

The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has two parameters, in the following order:

- An account object.
- An array of all books objects.

It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.

**Example:**

```javascript
getTotalNumberOfBorrows(account, books); // 22
```

#### getBooksPossessedByAccount()

The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:

- An account object.
- An array of all books objects.
- An array of all author objects.

It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

**Example:**

```javascript
getBooksPossessedByAccount(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
```

---

### Book functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/9012c8115fddba330e4958c3a907bcaa-image.png)

#### findAuthorById()

The `findAuthorById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of authors.
- An ID of a single author.

It returns the author object that has the matching ID.

**Example:**

```javascript
findAuthorById(authors, 11);
/*
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  }
*/
```

#### findBookById()

The `findBookById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of books.
- An ID of a single book.

It returns the book object that has the matching ID.

**Example:**

```javascript
findBookById(books, "5f447132320b4bc16f950076");
/*
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    ...
  }
*/
```

#### partitionBooksByBorrowedStatus()

The `partitionBooksByBorrowedStatus()` function in `public/src/books.js` has a single parameter:

- An array of books.

It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains books _that have been loaned out, and are not yet returned_ while the second array contains books _that have been returned._ You can check for the return status by looking at the first transaction in the `borrows` array.

**Example:**

```javascript
partitionBooksByBorrowedStatus(books);
/*
  [
    [
      {
        id: "5f447132d487bd81da01e25e",
        title: "sit eiusmod occaecat eu magna",
        genre: "Science",
        authorId: 8,
        borrows: [
          {
            id: "5f446f2e2cfa3e1d234679b9",
            returned: false,
          },
          ...
        ]
      },
      ...
    ],
    [
      {
        id: "5f44713265e5d8d17789beb0",
        title: "tempor occaecat fugiat",
        genre: "Travel",
        authorId: 16,
        borrows: [
          {
            id: "5f446f2e4eff1030e7316861",
            returned: true,
          },
          ...
        ]
      },
      ...
    ]
  ]
*/
```

#### getBorrowersForBook()

The `getBorrowersForBook()` function in `public/src/books.js` has two parameters, in the following order:

- A book object.
- An array of all accounts.

It should return an array of all the transactions from the book's `borrows` key. However, each transaction should include the related account information and the `returned` key.

**Example:**

```javascript
getBorrowersForBook(book, accounts);
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
```

---

## Home functions

![image.png](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/6e9b6e3b27d21cff7c80cd9efec9c421-image.png)

### getTotalBooksCount()

The `getTotalBooksCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of book objects inside of the array.

**Example:**

```javascript
getTotalBooksCount(books); // 100
```

### getTotalAccountsCount()

The `getTotalAccountsCount()` function in `public/src/home.js` has a single parameter:

- An array of accounts.

It returns a number that represents the number of account objects inside of the array.

**Example:**

```javascript
getTotalAccountsCount(accounts); // 75
```

### getBooksBorrowedCount()

The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.

**Example:**

```javascript
getBooksBorrowedCount(accounts); // 65
```

### getMostCommonGenres()

The `getMostCommonGenres()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

If more than five genres are present, only the top five should be returned.

**Example:**

```javascript
getMostCommonGenres(books);
/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/
```

### getMostPopularBooks()

The `getMostPopularBooks()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

If more than five books are present, only the top five should be returned.

**Example:**

```javascript
getMostPopularBooks(books);
/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
```

### getMostPopularAuthors()

The `getMostPopularAuthors()` function in `public/src/home.js` has two parameters, in the following order:

- An array of books.
- An array of authors.

It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

If more than five authors are present, only the top five should be returned.

**Example:**

```javascript
getMostPopularAuthors(books, authors);
/*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
*/
```
