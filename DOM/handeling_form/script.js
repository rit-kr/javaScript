let form = document.querySelector("form");
let result = document.querySelector(".new-container");
let resultName = document.querySelector(".name");
let resultEmail = document.querySelector(".email");
let resultLove = document.querySelector(".love");
let resultColor = document.querySelector(".color");
let resultRating = document.querySelector(".rating");
let resultGenre = document.querySelector(".genre");
let resultAgree = document.querySelector(".agree");

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
    userInfo.show = form.elements.show.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.rating.value;
    userInfo.drone = form.elements.drone.checked;
    userInfo.terms = form.elements.terms.checked;

    form.style.display = "none";
    result.style.display = "inherit";

    resultName.innerText = `Hello ${userInfo.name}`;
    resultEmail.innerText = `Email: ${userInfo.email}`;
    resultLove.innerText = `You Love: ${userInfo.show}`;
    resultColor.innerText = `Color: ${userInfo.color}`;
    resultRating.innerText = `Rating: ${userInfo.rating}`;
    resultGenre.innerText = `Book Genre: ${userInfo.drone}`;
    resultAgree.innerText = `You agree to Terms and Conditions`;
    
}

form.addEventListener("submit", handleSubmit);