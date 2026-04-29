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

addBookToLibrary("Atomic Habits","James Clear", 200, "not read")
addBookToLibrary("The Fellowship of the Ring","tolkien", 423, " read" )
addBookToLibrary("count of monte cristo","Alexandre Dumas", 1500 , "read" )
//console.log(myLibrary)

//for(let Book of myLibrary){
  // console.log(Book);
//}
function showBookToPage(){
    myLibrary.forEach((function(Book){
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

showBookToPage()