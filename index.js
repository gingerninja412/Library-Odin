//library array
let library = [];

class Book {
  constructor (name, author, pageCount, readStatus) {
    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.readStatus = readStatus
    library.push(this)
  }
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

//helper functions


//button functions
function newBook() {
  const readStatus = $("input[name='readStatus']:checked").val();
  let book = new Book(titleField.val(), authorField.val(), pageField.val(), readStatus);
  let bookCard = $("<div class='book-card'></div>")
  let title = $("<h3></h3>")
  title.text(book.name)
  bookCard.append(title)
  let author = $("<h3></h3>")
  author.text(book.author)
  bookCard.append(author)
  let pageCount = $("<h3></h3>")
  pageCount.text("pages:" + book.pageCount)
  bookCard.append(pageCount)
  let read = null
  if (readStatus == "yes") {
    read = $(`<h3>already read</h3>`)
  } else {
    read = $(`<h3>not read yet</h3>`)
  }
  bookCard.append(read)
  let buttons = $("<div class='book-card-buttons'><button class='delete-button' onclick='deleteBook(this)'>Delete</button><button class='toggle-read' onclick='changeReadStatus(this)'>Toggle read</button></div>")
  bookCard.append(buttons)
  bookList.append(bookCard)
  removeForm()
}

function changeReadStatus(object) {
  let bookStatus = object.parentElement.parentElement.children[3]
  let name = object.parentElement.parentElement.children[0].innerText
  let indexToChange = library.map(item => {return item.name}).indexOf(name)
  console.log(indexToChange)

  if(bookStatus == "already read") {
    library[indexToChange].readStatus = "no"
    bookStatus.innerText = "not read yet"
    console.log(bookStatus)
  } else if (bookStatus == "not read yet") {
    library[indexToChange].readStatus = "yes"
    bookStatus.innerText = "already read"
  }
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
