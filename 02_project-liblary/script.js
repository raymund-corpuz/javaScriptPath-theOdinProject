const addButton = document.querySelector("#addButton");

const modal = document.querySelector(".modal");
const mainContainer = document.querySelector(".container");
const close = document.querySelector(".times");

addButton.addEventListener("click", showModal);
close.addEventListener("click", closeModal);

function showModal() {
  modal.classList.remove("hidden");
  mainContainer.classList.add("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  mainContainer.classList.remove("hidden");
}

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
