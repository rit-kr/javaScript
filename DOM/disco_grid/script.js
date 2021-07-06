let container = document.querySelector(`.container`);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 getRandomNumber(1,500);
 console.log(getRandomNumber(1,500));

for(let i = 0; i <= 500; i++){
    let box = document.createElement(`div`);
    box.classList.add(`box`);
    box.style.textAlign = "center";
    container.append(box)
};
let box = document.querySelectorAll(`.box`);

function getRandomColor() {
    let letters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

    let color = '#';
    for (let i = 0; i < 6; i++) {
        let randomColor = Math.floor(Math.random() * 16);   
        color+= letters[randomColor];
    }
    return color;
}
 console.log(getRandomColor());

function handler() {
    // let container = document.querySelector(`.container`);

     box.forEach((elm) => {
        elm.style.backgroundColor = getRandomColor();
        elm.innerText = getRandomNumber(1,500);
        // elm.style.color = getRandomColor();
     });
     console.log("handler");
}

container.addEventListener("mousemove", handler);