let form = document.querySelector("form");
let small = document.querySelectorAll("small")

function doesContentANumber(str){
    return str.split("").some(e => Number(e));
}

function handleSubmit(event){
    event.preventDefault();
    
    console.dir(event.target);
    
    
    let userNameElm = event.target.elements.username;
    
    if (userNameElm.value.length < 4) {
        userNameError = "Username can't be less than 4 characters";
    }else {
        userNameError = "";
    }
    userNameElm.nextElementSibling.innerText = userNameError;
    // console.log(userNameElm.value);

    let nameElm = event.target.elements.name;

    if (doesContentANumber(nameElm.value)) {
        nameError = "Name can't be numbers";
    } else{
        nameError = "";
    }
    nameElm.nextElementSibling.innerText = nameError;

    let emailElm = event.target.elements.email;

    if (emailElm.value.includes("@") == false) {
        emailError = "Email must contain the symbol @";
    }else if (emailElm.value.length < 6) {
        emailError = "Email must be at least 6 characters";
    } else{
        emailError = "";
    }
    emailElm.nextElementSibling.innerText = emailError;

    let phoneElm = event.target.elements.phone;

    if (!doesContentANumber(phoneElm.value)) {
        phoneError = "Phone numbers can only contain number";
    }else if (emailElm.value.length < 7) {
        phoneError = "Length of phone number can't be less than 7";
    } else{
        phoneError = "";
    }
    phoneElm.nextElementSibling.innerText = phoneError;

    let passwordElm = event.target.elements.password;
    let confirmPasswordElm = event.target.elements.confirmPassword;

    if (passwordElm.value !== confirmPasswordElm.value) {
        passwordError = "Password and confirm password must be same";
        confirmPasswordError = "Password and confirm password must be same";

    } else{
        passwordError = "";
    }
    passwordElm.nextElementSibling.innerText = passwordError;
    // confirmPasswordElm.nextElementSibling.innerText = confirmPasswordError;

    if (small.innerText = ""){
        alert("User Added Successfully!");
    }

};

form.addEventListener("submit", handleSubmit);