

const storage =JSON.parse(localStorage.getItem("book")||"[]");
const  myBook=document.querySelector(".myfavorites");
window.books=storage;
master("Remove From Favorite");

const favBtns = document.querySelectorAll(".fav-btn");
const favorites = [];

function removeFromFavorites(bookId) {
  const storage = JSON.parse(localStorage.getItem("book") || "[]");
  const index = storage.findIndex((b) => b.id === bookId);
  if (index >= 0) {
    storage.splice(index, 1);
    localStorage.setItem("book", JSON.stringify(storage));
  }
  window.location.href = "myFavoriteBook.html";
}

favBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bookId = parseInt(e.target.dataset.bookId);
    removeFromFavorites(bookId);
  });
});
