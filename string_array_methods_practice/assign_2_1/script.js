let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
  ];
  
  // - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
  let longestWord = [...words].sort((a,b) => a.length - b.length).pop();

  // - Convert the above array "words" into an array of length of word instead of word.
  let arrayLength = words.map((word)  => word.length)

  // - Create a new array that only contains word with atleast one vowel.
  let vowelArray = words.filter((word) => {
      if (word.toLowerCase().includes("a") ||
        word.toLowerCase().includes("e") ||
        word.toLowerCase().includes("i") ||
        word.toLowerCase().includes("o") ||
        word.toLowerCase().includes("u")
        ){ return true;
        } else {
            return false;
        }
    });


  // - Find the index of the word "rhythm"
   words.indexOf("rhythm")
   
  // - Create a new array that contians words not starting with vowel.
   let notStartVowelArray = words.filter((word) => {
      if (word.toLowerCase().startsWith("a") ||
        word.toLowerCase().startsWith("e") ||
        word.toLowerCase().startsWith("i") ||
        word.toLowerCase().startsWith("o") ||
        word.toLowerCase().startsWith("u")
        ){ return false;
        } else {
            return true;
        }
    });
  // - Create a new array that contianse words not ending with vowel
  let notEndVowelArray = words.filter((word) => {
    if (word.toLowerCase().endsWith("a") ||
      word.toLowerCase().endsWith("e") ||
      word.toLowerCase().endsWith("i") ||
      word.toLowerCase().endsWith("o") ||
      word.toLowerCase().endsWith("u")
      ){ return false;
      } else {
          return true;
      }
    });



  let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
   let sum = numbers.reduce((acc, cv) => {
       acc = acc + cv;
       return acc;
   }, 0);

  // - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

  let multipleOfThree = numbers.filter((num) => num % 3 === 0);

  // - Create a new array that contains only even numbers
  let isEven = numbers.filter((num) => num % 2 === 0);
  // - Create  a new array that contains only odd numbers.

  let isOdd = numbers.filter((num) => num % 2 !== 0);
  // - Create a new array that should have true for even number and false for odd numbers.

  let evenOrOdd = numbers.map((num) => num % 2 === 0);

  // - Sort the above number in assending order.
  let sortedNumber = [...numbers].sort((a,b) =>  a - b);
  
  // - Does sort mutate the original array?

//   yes, sort mrthod mutate origimal array
  
  // - Find the sum of the numbers in the array.
  let sumOfNumbers = numbers.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
}, 0);
  
  //- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
  function averageNumbers(array) {
    let average = array.reduce((acc, cv) => {
        acc = acc + cv;
        return acc / arr;
    }, 0) / array.length
   }

  let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
  ];
  
  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

//    let lengthOfstrings = strings.map((string) => string.length); 

//    let averageWordLength = lengthOfstrings.reduce((acc, cv) => {
//     acc = acc + cv;
//     return acc / 2;
// }, 0);  

function averageWordLength(words) {
    return (words.map((word) => word.length).reduce((acc, cv) => {
        return acc + cv;
    } ,0) / words.length
    );
}

