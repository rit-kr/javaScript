let input = document.querySelector("input");

let root = document.querySelector(`.card`);
let rootTags = document.querySelector(`.tags`);

let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[]);



function handleInput(event) {
    let searchText = event.target.value;
    let filteredpeople = allPeople.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(p)
    creatUI(filteredpeople);
}

let allTags = got.houses.map((house) => house.name);
let activeHouse = "";
// console.log(allTags);


function creatUI(allPeople) {
    root.innerHTML = "";
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
        root.append(li);
    });

}

function creatTagUI(tag = []) {
    rootTags.innerHTML = "";
    allTags.forEach(elm => {
        let li = document.createElement(`li`);
        li.classList.add(`tags-box`);
        li.innerText = elm;

        li.addEventListener("click",() => {
            activeHouse = tag;
            let peopleOfHouse = got.houses.find((house) => house.name === elm).people;
            li.classList.add(`tags-box-active`);
            
            // console.log(peopleOfHouse);

            creatUI(peopleOfHouse);
        });
        rootTags.append(li);
    });
    
    }

creatUI(allPeople);

creatTagUI(allTags);


input.addEventListener("keyup", handleInput);