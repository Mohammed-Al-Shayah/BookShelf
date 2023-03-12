

const storage =JSON.parse(localStorage.getItem("book")||"[]");
const  myBook=document.querySelector(".myfavorites");
window.books=storage;
master("Remove From Favorite");

const reBtns = document.querySelectorAll(".myfavorites");


reBtns.addEventListener("click", (e) => {
  const bookId = e.target.getAttribute("data-book-id");
  const bookIndex = storage.findIndex((b) => b.id === parseInt(bookId));
  storage.splice(bookIndex, 1);
});
