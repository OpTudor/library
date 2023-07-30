const submitButton = document.getElementById("addBook");
const bookshelf = document.getElementById("bookshelf");
const addButton = document.getElementById("add");
const modal = document.getElementById("modal");
const form = document.querySelector("form");
const header = document.getElementById("header");
const overlay = document.getElementById("overlay");
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
}

function showBooks() {
  let counter = 0;
  clearBookshelf();
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
    bookPages.textContent = book.pages + " pages";
    cover.appendChild(bookPages);
    let bookRead = document.createElement("button");
    if (book.read == "true") {
      bookRead.classList.add("read");
      bookRead.textContent = "Read";
    } else {
      bookRead.classList.add("notRead");
      bookRead.textContent = "Not Read";
    }
    bookRead.classList.add("checkRead");
    bookRead.id = counter;
    bookRead.addEventListener("click", () => {
      changeStatus(bookRead);
    });
    counter++;
    cover.appendChild(bookRead);
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBook(bookRead);
    });
    cover.appendChild(removeButton);
  });
}

submitButton.addEventListener("click", () => {
  addBook();
  showBooks();
  modal.style.display = "none";
  overlay.style.display = "none";
  toggleBlur();
});
addButton.addEventListener("click", () => {
  modal.style.display = "flex";
  overlay.style.display = "flex";
  toggleBlur();
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
    toggleBlur();
  }
};
function toggleBlur() {
  bookshelf.classList.toggle("blur");
  header.classList.toggle("blur");
  addButton.classList.toggle("blur");
}
function changeStatus(button) {
  library[button.id].readBook();
  button.classList.toggle("read", library[button.id].read);
  button.classList.toggle("notRead", !library[button.id].read);
  button.textContent = library[button.id].read ? "Read" : "Not Read";
}

function removeBook(button) {
  library.splice(button.id, 1);
  showBooks();
}

function clearBookshelf() {
  bookshelf.textContent = "";
}
