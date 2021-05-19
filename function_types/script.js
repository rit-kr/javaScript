// Look at the example below and do the same for other problems.


/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/

//1. Write a Function Decleration
function convertToString(n) {
    return String(n);
  }
  
  //2. Write a Function Expression
  let convertToString = function (n) {
    return String(n);
  };
  
  //3. Write an Arrow Function
  let convertToString = (n) => String(n);
  
  //4. Write an Arrow Function with curly brackets (if possible)
  let convertToString = (n) => {
    return String(n);
  };
  
  //5. Execute the function
  convertToString(21);
  
  //6. Execute the function and store the return value in a variable.
  let returnValue = convertToString(23);
  
  //7. What is the typeof returnValue
  // typeof returnValue is "string"
  
  
  
  /* 1. Add one to the given value
  Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
  Do the following with above problem.
  */
  
  
  // 1. Write a Function Declaration
  function addOne(num){
      return num + 1;
  }
  
  // 2. Write a Function Expression
   const addOne = function(num) {
       return num + 1;
   };
  
  // 3. Write an Arrow Function
  const addOne = (num) =>  num + 1;

  
  // 4. Write an Arrow Function with curly brackets(if possible)
  const addOne = (num) => {
       return num + 1;
   };
  // 5. Execute the function
  addOne();
  
  // 6. Execute the function and store the return value in a variable.
  let returnValue = addOne();

  // 7. What is the typeof returnValue
  typeof retuenValue is Number;
  
  
  
  /* 2. Subtract one
  Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
  Do the following with above problem.
  */
  
  // 1. Write a Function Declaration
  function substractOne(num){
    return num - 1;
  }
  // 2. Write a Function Expression
  const substractOne = function(num) {
    return num - 1;
  };
  // 3. Write an Arrow Function
  const substractOne = num =>  num - 1;
  
  // 4. Write an Arrow Function with curly brackets(if possible)
  const substractOne = (num) => {
    return num - 1;
  };
  // 5. Execute the function
  substractOne();

  // 6. Execute the function and store the return value in a variable.
  let returnValue = substractOne();

  // 7. What is the typeof returnValue
  typeof retuenValue is Number;
  
  
  /* 3. Add two numbers
  Write a function named `sum` that accepts two numbers and returns the sum of them.
  Do the following with above problem.
  */
  
  // 1. Write a Function Declaration
  function sum(numA, numB){
    return numA + numB;
  }
  
  // 2. Write a Function Expression
  const sum = function(numA, numB) {
    return numA + numB;
  };

  // 3. Write an Arrow Function
  const sum = numA, numB => numA + numB;

  // 4. Write an Arrow Function with curly brackets(if possible)
  const sum = (numA, numB) => {
    return numA + numB;
  };

  // 5. Execute the function
  sum(20,12);
  // 6. Execute the function and store the return value in a variable
  let returnValue = sum(20,10);

  // 7. What is the typeof returnValue
  typeof retuenValue is Number;
  
  
  
  /* 4. Square of the given value
  Write a function named `square` that accepts a number and returns the square of the number.
  Do the following with above problem.
  */
  
  // 1. Write a Function Declaration
  function square(num){
    return num * num;
  }

  // 2. Write a Function Expression
  const square = function(num) {
    return num * num;
  };
  
  // 3. Write an Arrow Function
  const square = num => num * num;
  
  // 4. Write an Arrow Function with curly brackets(if possible)
  const square = (num) => {
    return num * num;
  };

  // 5. Execute the function
  square(20,12);

  // 6. Execute the function and store the return value in a variable.
  let returnValue = square(20,10);

  // 7. What is the typeof returnValue
  typeof retuenValue is Number;
  
  
  
  
  /* 5. Find isGreater
  Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
  Do the following with above problem.
  */
  
  // 1. Write a Function Declaration
  function isGreater(x,y){
    if (x > y){
        return `true`
    } else{
        return `false`
    }
  };
  // 2. Write a Function Expression
  const isGreater = function(x,y) {
      return (x > y) ? true : false;
  }
  
  // 3. Write an Arrow Function
  const isGreater = x,y => (x > y) ? true : false;

  // 4. Write an Arrow Function with curly brackets(if possible)
  const isGreater = x,y => {
    return (x > y) ? true : false;
  }
  // 5. Execute the function
  isGreater(20,12);

  // 6. Execute the function and store the return value in a variable.
  let returnValue = isGreater(20,10);

  // 7. What is the typeof returnValue
  typeof retuenValue is Boolean;  

  
  
  /* 6.
  Write a function named `oddOrEven` that accepts a`number` and returns
    - `Number is odd` for odd number
    - `Number is even` for even number.
  Do the following with above problem.
  */
  
  // 1. Write a Function Declaration

  function oddOrEven(n) {
    if (n % 2 === 0) {
      return `even`;
    } else {
      return `odd`;
    }
  }
  
  // 2. Write an anonymous Function Expression

  const oddOrEven = function(n) {
    if (n % 2 === 0) {
      return `even`;
    } else {
      return `odd`;
    }
  };
  
  // 3. Write an named Function Expression
  const oddOrEven = function isOdd(n) {
    if (n % 2 === 0) {
      return `even`;
    } else {
      return `odd`;
    }
  };
  
  // 4. Write an Arrow Function
  
  const oddOrEven = n => (n % 2 === 0) ? `even` : `odd`;

  // 5. Write an Arrow Function with curly brackets(if possible)

  const oddOrEven = (n) => {
    if (n % 2 === 0) {
      return `even`
    } else {
      return `odd`
    }
  }
  
  // 6. Execute the function
  oddOrEven();

  // 7. Execute the function and store the return value in a variable.
  let returnValue = oddOrEven(23,21);

  // 8. What is the typeof returnValue
  
  // typeof retuenValue is Number