const myLibrary = [];

function Book(title) {
  this.title = title;
  this.id = Date.now();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  return myLibrary;
}

const harry = new Book("Harry");
const potter = new Book("Potter");

console.log(addBookToLibrary(harry));
console.log(addBookToLibrary(potter));
console.log(myLibrary[0]);

myLibrary.forEach((book) => {
  console.log(book.title);
});
