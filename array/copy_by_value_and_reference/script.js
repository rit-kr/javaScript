let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
let collection = [];

for(number of numbers){
  collection.push(number);
}
for(number of userIds){
  collection.push(number);
}
console.log(collection);

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
let evenCollection = [];

for(number of numbers) {
  if (number % 2 == 0) {
    evenCollection.push(number)
  }
}
for(number of userIds) {
  if (number % 2 == 0) {
    evenCollection.push(number)
  }
}
console.log(evenCollection);

// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`

let oddCollection = [];

for(number of numbers) {
  if (number % 2 == 0) {
    oddCollection.push(number)
  }
}
for(number of userIds) {
  if (number % 2 == 0) {
    oddCollection.push(number)
  }
}
console.log(oddCollection);
