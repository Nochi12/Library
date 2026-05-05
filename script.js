const container = document.querySelector("#container");
const confirmBtn = document.querySelector("#confirmBtn") ;
const book_form = document.getElementById("book_form");
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
   return myLibrary.push(create_Book);
}

Book.prototype.toggleReadStatus = function(){
 if(this.read === "Read"){
     this.read = "Not Read";
  }
  else if (this.read === "Not Read"){
       this.read = "Read";
 }
}


console.log(myLibrary)
addBookToLibrary("Atomic Habits","James Clear", 200, "Not Read")
addBookToLibrary("The Fellowship of the Ring","tolkien", 423, "Read" )
addBookToLibrary("The Count of Monte Cristo","Alexandre Dumas", 1500 , "Read" )
//console.log(myLibrary)

//for(let Book of myLibrary){
  // console.log(Book);
//}
function showBookToPage(array){
    array.forEach((function(book){
      const bookContainer = document.createElement("div");
      const h1 = document.createElement("h1");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const reset = document.createElement("button");
      const changeRead = document.createElement("button")

      h1.textContent = book.title;
      p1.textContent = `Author: ${book.author}`;
      p2.textContent = `Pages: ${book.pages}`;
      p3.textContent = `Status: ${book.read}`;  
      reset.innerHTML  = '🗑️';  
      changeRead.innerHTML  = 'Toggle Book Status';
      bookContainer.dataset.bookID = book.id;

      bookContainer.appendChild(h1);
      bookContainer.appendChild(p1);
      bookContainer.appendChild(p2);
      bookContainer.appendChild(p3);
      bookContainer.appendChild(changeRead);
      bookContainer.appendChild(reset);
      container.appendChild(bookContainer)
         
      bookContainer.classList.add("bookContainer");
      bookContainer.style.height= "300px"
      bookContainer.style.border = "solid 1px  black";
      bookContainer.style.textAlign= "center";
      bookContainer.style.backgroundColor = "#EAEDF0";
      bookContainer.style.padding= "25px";
      bookContainer.style.borderRadius= "5px";
      bookContainer.style.boxShadow = "5px 5px 12px 6px rgba(0,0,0,0.19)";
      bookContainer.style.marginBottom ="10px"
      reset.style.width="40%";
      reset.style.borderRadius = "15px";
      reset.style.marginTop= "40px";
      reset.style.marginLeft= "10px";
      reset.style.padding= "5px";
      reset.style.backgroundColor =" #7F8086";
      changeRead.style.width="40%";
      changeRead.style.borderRadius = "15px";
      changeRead.style.marginTop= "40px"
      changeRead.style.padding= "5px";
      changeRead.style.backgroundColor = "#b4b5be";
      h1.style.marginBottom="20px"
      p3.style.marginBottom="20px"
      changeRead.addEventListener("click",()=>
        {
          book.toggleReadStatus();
          //console.log(book.read)
          bookContainer.dataset.bookID
         p3.textContent = `Status: ${book.read}`;
       });  
      //Object.entries(Book).forEach(function(value){
    //  const p = document.createElement("p");
    //  p.innerHTML= value;
    //  bookContainer.appendChild(p);
    // });
    reset.addEventListener("click", () =>{
      bookContainer.dataset.bookID
     container.removeChild(bookContainer)
    });
    
    
     // console.log(Book);   
    }));
};


confirmBtn.addEventListener("click", (event) => {
 
  event.preventDefault();

  const book_title = document.getElementById("title");
  const book_author = document.getElementById("author");
  const book_pages = document.getElementById("pages");
  const book_read = document.querySelector('input[name=readStatus]:checked');

  addBookToLibrary( book_title.value, book_author.value, book_pages.value ,  book_read.value )
 book_form.close()

 document.getElementById("bookForm").reset();
    const slice = myLibrary.slice(-1);
  console.log(slice)
  showBookToPage(slice)
});

showBookToPage(myLibrary)