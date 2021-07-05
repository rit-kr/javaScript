let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[]);
// console.log(allPeople);
let ul = document.querySelector(`ul`);

allPeople.forEach(elm => {
    let li = document.createElement(`li`);
    li.classList.add(`box`);

    let div = document.createElement(`div`);
    div.classList.add(`info`);
    let img = document.createElement(`img`);
    img.src = elm.image;
    let h2 = document.createElement(`h2`);
    h2.innerText = elm.name;
    div.append(img, h2);

    let p = document.createElement(`p`);
    p.innerText = elm.description;

    let a = document.createElement(`a`);
    a.innerText = "Learn More!";
    a.href = elm.wikilink;

    li.append(div, p, a);
    ul.append(li);
});