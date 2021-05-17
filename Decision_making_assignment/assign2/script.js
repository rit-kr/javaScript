// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :
- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

 let age = +prompt(`How old are you?`);

 if (age < 4){
   alert(" Hey Kiddo! Can You Walk ?")
 } else if (age <= 11){
   alert(" You are too young to participate in the marathon")
 } else if (age <= 55){
   alert("You can participate in the marathon")
 } else if (age > 55) {
   alert(" You are too old to participate in the marthon")
 } else {
   alert(`Trying to become superhero?`)
 }

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.
Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]


let n = prompt(`Please enter no of times you want to enter letter E`);
let eString = '', i;
for(i = 0; i<+n; i++){
  eString += 'e';
}
alert(`H${eString}llo`)

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let n = +prompt(`Please enter a input`);
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
} alert(`The sum of n natural number is ${sum}`);

/* Switch Statement
 🎖Using switch statement do the following
Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
*/
// [Your code goes here]

let n = +prompt(`Please enter a number between 1 to 9`);
switch (n) {
  case 1:
  alert(`one`);
  break;
  case 2:
  alert(`Two`);
  break;
  case 3:
  alert(`Three`);
  break;
  case 4:
  alert(`Four`);
  break;
  case 5:
  alert(`Five`);
  break;
  case 6:
  alert(`Six`);
  break;
  case 7:
  alert(`Seven`);
  break;
  case 8:
  alert(`Eight`);
  break;
  case 9:
  alert(`nine`);
  break;
  default:
    alert(`None of the above`)
}

/*
🎖Using switch statement do the following
Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt(`Please enter your marks`);

switch (true) {
    case  marks <= 100 && marks > 90:
    alert(`AA`);
    break;
    case  marks <= 90 && marks > 80:
    alert(`AB`);
    break;
    case  marks <= 80 && marks > 70:
    alert(`BB`);
    break;
    case  marks <= 70 && marks > 60:
    alert(`BC`);
    break;
    case  marks <= 60 && marks > 50:
    alert(`CC`);
    break;
    case  marks <= 50 && marks > 40:
    alert(`CD`);
    break;
    case  marks <= 40 && marks >30:
    alert(`DD`);
    break;
    case  marks <= 30 && marks > 0:
    alert(`FF`);
    break;
    default:
      alert(`Enter a valid input`)
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let num1 = +prompt(`Please enter a number`);
let num2 = +prompt(`Please enter another number`);
if (num1 > num2) {
  alert(`Greater number is ${num1}`);
} else if  (num2 > num1){
  alert(`Greater number is ${num2}`);
} else {
  alert(`Please enter a valid number`)
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let num1 = +prompt('Enter num1');
let num2 = +prompt('Enter num2');
let num3 = +prompt('Enter num3');

let product = num1 * num2 * num3;
if (product > 0) {
  alert(`The final value is positive`)
} else {
  alert(`The final value is negative`)
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).
  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let num1 = +prompt(`Please enter a number`);
let operator = prompt(`Enter the operator`)
let num2 = +prompt(`Please enter another number`);

if (operator == "+") {
  alert(`Sum is ${num1 + num2}`)
} else if (operator == "-" && num1 > num2) {
  alert (`Substraction is ${num1 - num2}`)
} else if (operator == "*") {
  alert (`Multiple is $is{num1 * num2}`)
} else if (operator == "/" && num1 > num2) {
  alert (`Division is ${num1 / num2}`)
} else if (num1 < num2) {
  alert (`Number Two is larger then Number one`)
} else {
  alert(`Please enter a valid input`)
}