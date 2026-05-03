const container = document.querySelector("#container")
const myLibrary = [];

function Book( title, author, pages,read ,id, ) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
     this.read = read;
    this.id  =  self.crypto.randomUUID();
   
}

function addBookToLibrary( title, author, pages , read ) {

    const create_Book = new Book( title, author, pages, read );
    const push_Book = myLibrary.push(create_Book);
    return push_Book
}

addBookToLibrary("Atomic Habits","James Clear", 200, "Not Read")
addBookToLibrary("The Fellowship of the Ring","tolkien", 423, " Read" )
addBookToLibrary("count of monte cristo","Alexandre Dumas", 1500 , "Read" )
//console.log(myLibrary)

//for(let Book of myLibrary){
  // console.log(Book);
//}
function showBookToPage(array){
    array.forEach((function(Book){
      const bookContainer = document.createElement("div");
      bookContainer.classList.add("bookContainer");
      bookContainer.style.height= "300px"
      bookContainer.style.border = "solid 1px  black";
      bookContainer.style.textAlign= "center"
      //Object.entries(Book).forEach(function(value){
    //  const p = document.createElement("p");
    //  p.innerHTML= value;
    //  bookContainer.appendChild(p);
    // });
      const h1 = document.createElement("h1");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      h1.textContent = Book.title;
      p1.textContent = `Author: ${Book.author}`;
      p2.textContent = `Pages: ${Book.pages}`;
      p3.textContent = `Status: ${Book.read}`;  
      
      bookContainer.appendChild(h1);
      bookContainer.appendChild(p1);
      bookContainer.appendChild(p2);
      bookContainer.appendChild(p3);
      container.appendChild(bookContainer)
      console.log(Book);
    }));
};

confirmBtn.addEventListener("click", (event) => {
 
  event.preventDefault();

  const book_title = document.getElementById("title");
  const book_author = document.getElementById("author");
  const book_pages = document.getElementById("pages");
  const book_read = document.querySelector('input[name=readStatus]:checked');

  
 book_form.close(addBookToLibrary( book_title.value, book_author.value, book_pages.value ,  book_read.value ))

    const slice = myLibrary.slice(-1);
  console.log(slice)
  showBookToPage(slice)
});

showBookToPage(myLibrary)