
let ul = document.querySelector('ul');

books.forEach(book => {
    let li = document.createElement(`li`);
    li.classList.add(`box`)
    let img = document.createElement(`img`);
    img.classList.add(`img`);
    img.src = book.image;
    let h2 = document.createElement(`h2`);
    h2.innerText = book.title;
    let h3 = document.createElement(`h3`);
    h3.innerText = `Author:${book.author}`;
    let div = document.createElement(`div`);
    let a = document.createElement(`a`);
    a.innerText = "Buy Now";
    a.classList.add(`btn`);
    div.append(a);
    li.append(img,h2,h3,div);
    ul.append(li); 
});
