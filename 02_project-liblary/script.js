//----------------- GUI ---------------------------
const addButton = document.querySelector("#addButton");
const modal = document.querySelector(".modal");
const mainContainer = document.querySelector(".container");
const close = document.querySelector(".times");

//------------------ SHOW / HIDE Modal ----------------
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

//------------------ ADD BOOK FORM -----------------

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const date = document.querySelector("#date");
const bookForm = document.querySelector(".bookForm");
const listItem = document.querySelector(".list-item");

bookForm.addEventListener("submit", saveForm);

let bookData = {};

function saveForm(e) {
  e.preventDefault();
  const bookTitle = title.value.trim();
  const bookAuthor = author.value.trim();
  const bookPages = pages.value.trim();

  const newBookData = new Book(bookTitle, bookAuthor, bookPages);

  addBookToLibrary(newBookData);

  title.value = "";
  author.value = "";
  pages.value = "";
}

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = Date.now();
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  myLibrary.forEach((book) => {
    const listTitle = document.createElement("div");
    listTitle.textContent = `Title: ${book.title}`;
    listItem.appendChild(listTitle);
    const spanAuthor = document.querySelector("span");
    spanAuthor.textContent = `Author: ${book.author}`;
    listTitle.appendChild(spanAuthor);
    const spanDate = document.querySelector("span");
    spanDate.textContent = `Pages: ${book.pages}`;
    listTitle.appendChild(spanDate);
  });
  closeModal();
}
