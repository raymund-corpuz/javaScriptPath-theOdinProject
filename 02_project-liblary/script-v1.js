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

  const listTitle = document.createElement("li");
  listTitle.textContent = `Title: ${book.title}`;
  listItem.appendChild(listTitle);
  const listAuthor = document.createElement("span");
  listAuthor.textContent = `Author: ${book.author}`;
  listTitle.appendChild(listAuthor);
  const listPages = document.createElement("span");
  listPages.textContent = `Pages: ${book.pages}`;
  listTitle.appendChild(listPages);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  listTitle.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    listTitle.remove();
  });

  closeModal();

  console.log(myLibrary);
}
