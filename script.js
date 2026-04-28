const myLibrary = [];

function Book( title, author, pages, id ) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id  =  self.crypto.randomUUID();
  
}

function addBookToLibrary( title, author, pages ) {

    const create_Book = new Book( title, author, pages );
    const push_Book = myLibrary.push(create_Book);
    return push_Book
}

addBookToLibrary("Atomic Habits","James Clear", 200)
addBookToLibrary("Lord of the rings","tolkien", 500 )
console.log(myLibrary)