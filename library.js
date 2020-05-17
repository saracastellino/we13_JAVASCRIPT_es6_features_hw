class Library {
  constructor(books = []) {
  this.books = books;
  }

  bookCount() {
    return this.books.length;
  };

  addBook(newBook) {
    this.books.push(newBook);
  };

  addBooks(newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  // printInventory = function() {
  //   this.books.forEach((book) => {
  //     return `${book.title} by ${book.author}, genre ${book.genre}`;
  //   });
  // };

  printInventory() {
    this.books.forEach(({title: title, author: author, genre: genre}) =>
        console.log(title +', '+ author +', '+ genre));
      };
}

// module.exports = Library;
export default Library;