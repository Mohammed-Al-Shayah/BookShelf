 
 function master(btnname){
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
        const div1 =document.createElement('div');
        const div2 =document.createElement('div');
        const div3 =document.createElement('div');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const btn =document.createElement('button');
        cell1.innerHTML = `<img src="${book.image}">`;
        div1.innerText = `${book.title}`;
        div2.innerText = `${book.author}`;
        div3.innerText = `${book.edition}`;
        cell5.innerHTML=`<button class="fav-btn" data-book-id="${book.id}">${btnname}</button>`;
    
    
        row2.appendChild(cell1);
        cell2.appendChild(div1);
        row2.appendChild(cell2);
        cell3.appendChild(div2);
        row2.appendChild(cell3);
        cell4.appendChild(div3);
        row2.appendChild(cell4);
        row2.appendChild(cell5);
        table.appendChild(row2);
        myBook.append(table);
    
    
    });
    }

