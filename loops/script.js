//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for(let i = 1; i < 11; i = i ++) {
    console.log(i)
}

// Using `console.log` log all the evan values from 1 to 10.

for(let i = 1; i <= 10; i = i ++){
    if(i % 2 == 0){
        console.log(i ,"Even Number");
    }
}

// Using `console.log` log all the od values from 1 to 10.

for(let i = 1; i <= 10; i = i ++){
    if(i % 2 !== 0){
        console.log(i, "Odd Number");
    }
}

// Calculate the sum of all numbers from 1 to 10.
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop

let i = 1;
while (i < 10){
        console.log(i);
    } i = i + 1;

// let i = 1;
// while (i < 10){
//     if(i % 2 == 0){
//         console.log(i);
//     } i = i + 1;
// }


// let i = 1;
// while (i < 10){
//     if(i % 2 !== 0){
//         console.log(i);
//     } i = i + 1;
// }

// let i = 1;
// let sum = 0;
// while (i < 10){
//     i = i + 1;
//     sum = sum + i;
// } 
// console.log(sum)