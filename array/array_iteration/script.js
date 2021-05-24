// 1. Create an array named numbers and store 5 number values in it
let numbers  = [2, 4, 5, 9, 11];

// 2. Calculates the sum of array items and print it to the console using console.log()
let sum = 0;

for(number of numbers) {
    sum += number;
} 
console.log(sum);

// 3. Calculates the average of array items and print it to the console using console.log()
let avr = sum / numbers.length;
console.log(avr);

// 4. Find the highest number in the array and print it to the console using console.log()
let highestNumber = numbers[0];

for(number of numbers) {
    if (number > highestNumber) {
        highestNumber =number;
    }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber = numbers[0];
for(number of numbers) {
    if (number < lowestNumber) {
        lowestNumber =number;
    }
}
console.log(lowestNumber);

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];

for(let number of numbers){
    if(number % 2 === 0){
    console.log(number, "even");
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];

for(let number of numbers){
    if(number % 2 !== 0){
    console.log(number, "odd");
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divByFive = [];

for(let number of numbers){
    if(number % 5 === 0){
    console.log(number);
    }
}

// 9. Log all the element of the array one by one
for(let number of numbers){
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
let divBy3 = [];

for(let number of numbers){
    if(number % 3 === 0){
    console.log(number);
    }
}