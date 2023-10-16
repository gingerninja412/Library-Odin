class Book {
  constructor (name, author, pageCount, readStatus) {
    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.readStatus = readStatus
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

//library array
let library = [];

//helper functions


//button functions
function newBook() {
  const readStatus = $("input[name='readStatus']:checked").value;
  let book = new Book(titleField.value, authorField.value, pageField.value, readStatus);
  let bookCard = $("<div class='book-card'></div>")
  let title = $(`<h3>${book.name}</h3>`)
  bookCard.append(title)
  let author = $(`<h3>${book.author}</h3>`)
  bookCard.append(author)
  let pageCount = $(`<h3>pages: ${book.pageCount}</h3>`)
  bookCard.append(pageCount)
  let read = null
  if (readStatus == "yes") {
    read = $(`<h3>already read</h3>`)
  } else {
    read = $(`<h3>not read yet</h3>`)
  }
  bookCard.append(read)
  bookList.append(bookCard)
  console.log("this works")
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
