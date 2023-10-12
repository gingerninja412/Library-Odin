Book = function (name, writer, numPages, read) {
  this.title = name
  this.author = writer
  this.pageCount = numPages
  this.readStatus = read
}

//DOM elements
const bookList = $(".book-list")
const addForm = $(".form-container")
const titleField = $("#title-field")
const authorField = $("#author-field")
const pageField = $("#pages-field")
const bookCount = $("#bookCount")
const readCount = $("#readCount")
const unreadCount = $("#unreadCount")

//array holding all books
let library = []

//helper functions
function createBook() {
  const readStatus = $("input[name='readStatus']:checked")
  return new Book(titleField.val(), authorField.val(), pageField.val(), readStatus.val())
}

function deleteBook(object) {
  let name = object.parentElement.parentElement.children[0].innerText;
  let removeIndex = library.map((item => {return item.title})).indexOf(name);
  library.splice(removeIndex, 1)
  object.parentElement.parentElement.remove()
  countBooks()
  countRead()
  countUnread()
}

function changeReadStatus(object) {
  let name = object.parentElement.parentElement.children[0].innerText;
  let bookToChangeIndex = library.map((item => {return item.title})).indexOf(name);
  
  if(library[bookToChangeIndex].readStatus == "yes") {
    library[bookToChangeIndex].readStatus = "no"
    object.parentElement.parentElement.children[3].innerText = "You have not read this book";
  } else {
    library[bookToChangeIndex].readStatus = "yes"
    object.parentElement.parentElement.children[3].innerText = `You have read this book`;
  }
  console.log(library[bookToChangeIndex].readStatus)
  
}

function displayBook(book) {
  let newBook = $("<div class='book-card'></div>")
  newBook.addClass("book-card")
  let title = $("<h3></h3>").text(book.title)
  newBook.append(title)
  let author = $("<h3></h3>").text(book.author)
  newBook.append(author)
  let pageCount = $("<h3></h3>").text(`Pages: ${book.pageCount}`)
  newBook.append(pageCount)
  if(book.readStatus == "yes") {
    let read = $("<h3></h3>").text(`You have read this book`)
    newBook.append(read)
  } else {
    let read = $("<h3></h3>").text(`You have not read this book`)
    newBook.append(read)
  }
  bookList.append(newBook)
  let buttons = $("<div class='book-card-buttons'><button class='delete-button' onclick='deleteBook(this)'>Delete</button><button class='toggle-read' onclick='changeReadStatus(this)'>Toggle read</button></div>")
  newBook.append(buttons)
}

function countBooks () {
  let newValue = library.length
  bookCount.text(`books ${newValue}`)
}

function countRead () {
  let newLibrary = library.filter((item) => {return item.readStatus == "yes"})
  let newValue = newLibrary.length
  readCount.text(`read: ${newValue}`)
}

function countUnread () {
  let newLibrary = library.filter((item) => {return item.readStatus == "no"})
  let newValue = newLibrary.length
  unreadCount.text(`unread: ${newValue}`)
}

//functions tied to buttons
function newBook() {
  let newBook = createBook()
  library.push(newBook)
  displayBook(newBook)
  removeForm()
  countBooks()
  countRead()
  countUnread()
} 

function getForm () {
  addForm.css("display", "flex")
}

function removeForm () {
  addForm.css("display", "none")
}

window.onload = () => {
 removeForm()
 countBooks()
 countRead()
 countUnread()
}
