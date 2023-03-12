
let books=[
  {  id: 1,
    title: "book1",
    author: "John Doe",
    edition: 12,
    image: "images/book.jpg"
},
{  id: 2,
    title: "book2",
    author: "John Doe",
    edition: 15,
    image: "images/book.jpg"
},
{  id: 3,
    title: "book1",
    author: "John Doe",
    edition: 12,
    image: "images/book.jpg"
},

];


const  myBook=document.querySelector(".bookShelf");

master("Add To Favorites");




const favBtns = document.querySelectorAll(".fav-btn");
const favorites = [];

function addToFavorites(book) {
  if (localStorage.getItem("book")) {
    const storage =JSON.parse(localStorage.getItem("book")||"[]");
    const exist = storage.find((b)=>b.id===book.id);
    if(!exist){
      localStorage.setItem("book" ,JSON.stringify([...storage,book]));

    }
  }

  else{
    localStorage.setItem("book",JSON.stringify([book]));
  }

      window.location.href="myFavoriteBook.html";

}


favBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bookId = e.target.dataset.bookId;
    const book = books.find((b) => b.id === parseInt(bookId));
    addToFavorites(book);
  });
});

