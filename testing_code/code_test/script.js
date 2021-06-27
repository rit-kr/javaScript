
// Write two tests for the following functions

//  Get full name

// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
// 2. After writing the function write two tests for above function
// 3. Make first test fail to see the result of the second test

function fullName(firstName = "", lastName = "") {
    return firstName + " " + lastName;
};

let result = fullName("Arya");
let expected = "Arya Stark";

let result = fullName("John", "Snow");
let expected = "John Snow";

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}




//  Calculate total amount

// 1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
// 2. Write two tests for the above function
// 3. Make the first test fail to see the result for the second

function totalAmount(amount, taxRate) {
    return  amount + (amount * taxRate)
}

let result = totalAmount(25, 5);
let expected = 50;

let result = totalAmount(30, 3);
let expected = 120;

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}