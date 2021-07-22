let first = document.querySelectorAll(`.first li`);

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomNumber(1,12));

first.forEach(box => {
    box.addEventListener("click", (event) =>{
        event.target.innerText  = getRandomNumber(1,12);
        
        setTimeout(() => {
            event.target.innerText  = "";
        }, 5000);
    });
});


let second = document.querySelector(`.second`);

second.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;

    setTimeout(() => {
        event.target.innerText  = "";
    }, 5000);
});

