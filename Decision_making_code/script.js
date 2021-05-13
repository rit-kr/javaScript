// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:
  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("Input a unique number",2));
if (num % 2 === 0) {
    alert("number is even");
} else {
    alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

 let num1 = Number(prompt("please enter a number",1));
 let num2 = Number(prompt("please enter another number"));

 if (num1 > num2) {
    alert(`${num1} is greater than ${num2}`);
 } else if (num1 < num2) {
    alert(`${num2} is greater than ${num1}`);
 } else if (num1 === num2) {
     alert(`Value of both number is same`);
 }

// 3. Convert the above code using`?` terniary operator

 num1 === num2 ?
 alert(`Both numbers are same`)
 : num1 > num2 ? 
 alert(`${num1} is greater than ${num2}`)
 :
 alert(`${num2} is greater than ${num1}`);
 
 // 

/*
4. Write a program that asks the user for the house name and check the following conditions:
  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`Please enter the house name`)

if (houseName === "stark" || houseName === "Stark") {
    alert(`Winter is coming`)
} else if (houseName === "lannister" || houseName === "Lannister") {
    alert(`A lannister always pays his debt`)
} else 
    alert(`All men must die`);

// 5. Convert the above code using`?` terniary operator

houseName == "stark" || houseName == "Stark" ?
alert(`Winter is comimg`)
: houseName == "lannister" || houseName == "Lannister" ?
alert(`A lannister always pays his debt`)
: 
alert(`All men must die`);

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthName = Number(prompt(`Enter month in number form`,1))
switch (true) {
    case monthName == 2:
        alert(`Number of days in month ${monthName} is 28 or 29`);
        break;
    case monthName == 4:
    case monthName == 6:
    case monthName == 9:
    case monthName == 11:
        alert(`Number of days in month ${monthName} is 30`);
        break;
    case monthName == 1:
    case monthName == 3:
    case monthName == 5:
    case monthName == 7:
    case monthName == 8:
    case monthName == 10:
    case monthName == 12:
        alert(`Number of days in month ${monthName} is 31`);
        break;
    case monthName < 1 || monthName > 12:
        alert(`Contact to Doctor Stranger`);
        break;
    default:
        alert(`Are you high?`);     
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

let salary = Number(prompt(`please enter your monthly income`));

switch (true) {
    case salary <= 0:
        alert(`I feel for you`);
        break;
    case salary >= 1 && salary <= 20000:
        alert(`your in-hand amount is ${salary - ((salary*10)/100)}`);
        break;
    case salary <= 40000:
        alert(`your in-hand amount is ${salary - ((salary*20)/100)}`);
        break;
    case salary >= 50000:
        alert(`your in-hand amount is ${salary - ((salary*30)/100)}`);
        break;
    default:
        alert(`Money is just a number!`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.
  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/

let marks = Number(prompt(`Please enter your marks`));

if (marks > 100){
    alert("Marks can't be greater than 100")
} else if (marks > 80 && marks < 100) {
    alert("Grade A")
} else if (marks > 50 && marks < 80) {
    alert("Grade B")
} else if (marks > 30 && marks < 50) {
    alert("Grade C")
} else if (marks > 0){
    alert("Grade D")
}

/* 9. Weather app
  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`);

switch(true) {
    case weather == "sunny" || weather == "Sunny" || weather == "SUNNY":
        alert(`Wear a T-shirt`);
        break;
    case weather == "rainy" || weather == "Rainy" || weather == "RAINY":
        alert(`Don't forget to take your raincoat`);
        break;
    case weather == "hot" || weather == "Hot" || weather == "HOT":
        alert(`Get a hanky`);
        break;
    case weather == "freezing" || weather == "Freezing" || weather == "FREEZING":
        alert(`Get your sweeter on`);
        break;
    default:
        alert(`Not a valid input`);
}