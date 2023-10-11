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



//helper functions
function createBook() {
  const readStatus = $("input[name='readStatus']:checked")
  return new Book(titleField.val(), authorField.val(), pageField.val(), readStatus.val())
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
  let deleteButton = $("<button>cancel</button>")
  newBook.append(deleteButton)
}

//functions tied to buttons
function newBook() {
  let newBook = createBook()
  displayBook(newBook)
  removeForm()
} 

function getForm () {
  addForm.css("display", "flex")
}

function removeForm () {
  addForm.css("display", "none")
}

window.onload = () => {
 removeForm()
}
