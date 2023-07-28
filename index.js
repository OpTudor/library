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
  let name, author, pages, read, book1;
  name = prompt("Name?", name);
  author = prompt("Author?", author);
  pages = prompt("Pages?", pages);
  read = prompt("Read?", read);
  book1 = new book(name, author, pages, read);
  library.push(book1);
  console.log(library);
}
