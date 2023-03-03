
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
{  id: 1,
    title: "book1",
    author: "John Doe",
    edition: 12,
    image: "images/book.jpg"
},


];


const  myBook=document.querySelector(".bookShelf");
const table = document.createElement('table');
const row1 = document.createElement('tr');
const cell1 = document.createElement('th');
const cell2 = document.createElement('th');
const cell3 = document.createElement('th');
const cell4 = document.createElement('th');
const cell5 = document.createElement('th');
cell1.innerText="Image";
cell2.innerText="Title";
cell3.innerText="Author";
cell4.innerText="Edition";
cell5.innerText="Action";
row1.appendChild(cell1);
row1.appendChild(cell2);
row1.appendChild(cell3);
row1.appendChild(cell4);
row1.appendChild(cell5);
table.appendChild(row1);

books.forEach(function(book) {

    const row2 = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    const cell5 = document.createElement('td');
    const btn =document.createElement('button');
    cell1.innerHTML = `<img src="${book.image}">`;
    cell2.innerHTML = `<div>${book.title}</div>`;
    cell3.innerHTML = `<div>${book.author}</div>`;
    cell4.innerHTML = `<div>${book.edition}</div>`;
    cell5.innerHTML='<button class="fav-btn" onclick="addToFavorites()">Add to Favorites</button>';


    row2.appendChild(cell1);
    row2.appendChild(cell2);
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    row2.appendChild(cell5);
    table.appendChild(row2);
    myBook.append(table);

});






function addToFavorites(book) {
  if (!books.includes(book)) {
    books.push(book);
    renderFavorites();
  }
}

function renderFavorites() {
  const favPage = window.open("", "myfavorites");
  const favPageBody = favPage.document.querySelector("body");
  favPageBody.innerHTML = `
    <h1>My Favorite Books</h1>
  `;
  favorites.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <img src="${book.image}">
      <div>${book.title}</div>
      <div>${book.author}</div>
      <div>Edition ${book.edition}</div>
      <button class="fav-btn" data-book-id="${book.id}">Remove from Favorites</button>
    `;
    favPageBody.appendChild(bookDiv);

});
}



