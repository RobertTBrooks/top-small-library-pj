📚 Library App
live display 
https://roberttbrooks.github.io/top-small-library-pj/

A simple, interactive web application for managing a digital library of books. Users can add, display, update, and remove books — all handled dynamically in the browser using JavaScript.

    This project was built to practice working with constructor functions, object-oriented JavaScript, and DOM manipulation while maintaining separation between data and UI.

Features

     Add new books using a modal form

     Display each book in a styled card format

     Toggle read status

     Remove books from the library

     Unique book IDs generated using crypto.randomUUID() to manage state reliably

Built With

    HTML5

    CSS

    JavaScript (ES6+)

Concepts Practiced

    Constructor functions and object creation

    Array-based data storage (myLibrary)

    DOM manipulation with event delegation

    Form handling with event.preventDefault()

    Responsive UI layout using CSS Grid

    Unique identifiers for objects and DOM elements (data-id attributes)

Screenshots

  ![image](https://github.com/user-attachments/assets/c1836263-3831-46c6-8b4c-89be4f51f36f)


How It Works
Structure

const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

Main Flow

    User submits the "New Book" form

    A Book object is created and pushed to myLibrary

    The UI is re-rendered to display the full list of books

    Each card includes:

        A "Remove" button to delete the book

        A "Toggle Read Status" button that updates the book's status and refreshes the display

Project Structure

library-app/
├── index.html
├── style.css
└── script.js


Inspiration

This project is an extension of an assignment from The Odin Project's JavaScript curriculum.
This project is open source and available under the MIT License.
