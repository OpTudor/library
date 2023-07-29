const submitButton = document.getElementById("addBook");
const bookshelf = document.getElementById("bookshelf");
const addButton = document.getElementById("add");
const modal = document.getElementById("modal");
const form = document.querySelector("form");
let library = [];

function book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readBook = function () {
    this.read = !this.read;
  };
}

function addBook() {
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  let theBook = new book(name, author, pages, read);
  library.push(theBook);
  console.log(library);
}

function showBooks() {
  library.forEach((book) => {
    let cover = document.createElement("div");
    cover.classList.add("cover");
    bookshelf.appendChild(cover);
    let bookName = document.createElement("div");
    bookName.classList.add("name");
    bookName.textContent = book.name;
    cover.appendChild(bookName);
    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("author");
    bookAuthor.textContent = book.author;
    cover.appendChild(bookAuthor);
    let bookPages = document.createElement("div");
    bookPages.classList.add("pages");
    bookPages.textContent = book.pages;
    cover.appendChild(bookPages);
    let bookRead = document.createElement("div");
    bookRead.classList.add("read");
    bookRead.textContent = book.read;
    cover.appendChild(bookRead);
  });
}

submitButton.addEventListener("click", () => {
  addBook();
  showBooks();
});
addButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let book1 = new book("Game of Thrones", "Michael Jackson", "999", true);
let book2 = new book("Game of Thrones", "Michael Jordan", "999", false);
library.push(book1);
library.push(book2);
showBooks();
