const loggerText = `
<p>Title and auther must me longer than 4 Characters <br>
and pages Can't be 0 or negative</p>`

document.addEventListener('DOMContentLoaded', () => {
  let bookUuidCounter = 10000000;
  //place to store all the books
  const bookStorage = [];


  //make a book class
  class bookObj {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.hasRead = read === 'yes' ? 'Has read already' : 'Has not read yet';
      this.uuid = bookUuidCounter++;
    }

    createBook() {
      return (
        `<div class="book-content-card" data-id="${this.uuid}">
          <div>
            <h2 id="book-title">Title: <br>${this.title}</h1>
            <h3 id="book-author">Author: <br>${this.author}</h3>
            <h4 id="book-pages">Total pages: ${this.pages}</h4>
            <p id="book-read">Current read status is <br>(${this.hasRead})</p>
            <button name="${this.uuid}" class="read-status-update" type="update">Update Status</button>
          </div>
        </div>` )
    };

    updateReadStatus() {
      this.hasRead = this.hasRead === 'Has read already' ? 'Has not read yes' : 'Has read already';
    }
  };

  const logger = document.getElementById('logger');
  const bookFormInput = document.getElementById('book-input');
  // out put place you want it to display on the page
  const bookFormOutput = document.querySelector('.book-sorter');

  //now we need to find the events of a buttonclick and get its ID thats store
  //on the book to let use update the status!

  function updateBooks() {
    bookFormOutput.innerHTML = '';
    for (book of bookStorage) {
      bookFormOutput.innerHTML += book.createBook();
    };

  };

  function CreateBookLog(title, author, pages, readStatus) {
    //take in the data and add the new book into the bookStorage
    //create the new book
    const newBook = new bookObj(title, author, pages, readStatus);

    //add the new book to the array in order
    //bookStorage.push(newBook);
    bookStorage.push(newBook);
    updateBooks();
    return newBook;
  };



  bookFormInput.addEventListener('submit', (e) => {
    // only needed for static site. to prevent it from try to send out to a database
    e.preventDefault();
    //console.log('step 1')
    // use the FormData class obj to make a new form data for outputting?
    const bookData = new FormData(bookFormInput);
    const hasRead = bookFormInput.querySelector('.radio-input:checked').value;
    //console.log("got bookdata and read stats");
    //console.log(`book data: ${bookData}\n hasRead data: ${hasRead}`);
    const title = bookData.get('title');
    const author = bookData.get('authors-name');
    const pages = bookData.get('pages');
    if (title.length >= 4 && author.length >= 4 && pages !== 0) {
      CreateBookLog(title, author, pages, hasRead);
      logger.innerHTML = `<p>You have Sumbmitted the Book "${bookData.get('title')}"</p>`;
      bookFormInput.reset();
    } else {
      if (logger.innerHTML === loggerText) {
        logger.innerHTML += `<p style=color:red;>Please Try Again..</p>`
      } else {
        logger.innerHTML = loggerText;
      }
    }
  });

  bookFormOutput.addEventListener("click", (e) => {
    const bookUuid = parseInt(e.target.name);
    //console.log(bookUuid);
    //console.log(bookStorage);
    const book = bookStorage.find(b => b.uuid === bookUuid);
    //console.log(book)
    book.updateReadStatus();
    updateBooks();

  });



});
