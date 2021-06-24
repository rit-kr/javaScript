let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // NOTE: Use reduce method whereever you can to solve this exercise:
  
  // Find the average grade

  // let totalAvgGrade = persons.map((person) => person.grade).reduce((acc, cv) => {
  //     acc+=cv;
  //     return acc
  // },0) / persons.length;

  let personsLn = persons.length;

  let totalGrade = persons.reduce((acc, cv) => {
    
    return acc + cv.grade;
  },0);
   console.log(totalGrade / personsLn);

  // Find the average grade of male

  let male = persons.filter((person) => person.sex === "M");
  let avgGradeMale = male.map((person) => person.grade).reduce((acc, cv) => {
    acc+=cv;
    return acc
},0) / male.length;

// let maleAvg = persons
//     .filter((person) => person.sex === "M")
//     .reduce((acc, cv) => {
//       return acc + cv.grade;
//     }, 0) /personsLn;

  // Find the average grade of female

  let female = persons.filter((person) => person.sex === "F");
  let avgGradeFemale = female.map((person) => person.grade).reduce((acc, cv) => {
    acc+=cv;
    return acc
},0) / female.length;

  // Find the highest grade
  let highestGrade = persons.map((person) => person.grade).sort((a, b) => a - b).pop();

  // Find the highest grade in male

    let highestGradeMale = male.map((person) => person.grade).sort((a, b) => a - b).pop();

  // Find the highest grade in female
  let highestGradeFemale = female.map((person) => person.grade).sort((a, b) => a - b).pop();
  
  // Find the highest grade for people whose name starts with 'J' or 'P'

  let namePorJ = persons.filter((person) => (
    person.name[0] === "P" || person.name[0] === "J")
  );
  let highestGradePorJ = namePorJ.map((person) => person.grade).sort((a,b) => a - b).pop();


  const fruitBasket = [
    'banana',
    'cherry', 
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig',
  ];
  
  /* 
  Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
  that fruit has appeared in the array.Store it in new variable fruitsObj
  Output: 
  {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
  */
  let fruitsObj = fruitBasket.reduce(function(acc, cv){
    if (typeof acc[cv] == `undefined`) {
      acc[cv] = 1;
    } else {
      acc[cv] += 1;
    }
    return acc;
  }, {});

  /* 
  Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
  that fruit appeared.Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()
  Output: 
  [['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
  */

  // let newArr = Object.entries(fruitsObj);
  // console.log(newArr)
  let fruitArray = Object.keys(fruitsObj).reduce((acc, cv) => {
    acc = acc.concat([[cv, fruitsObj[cv]]]);
    return acc;
    },
    []
  );

  const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  
  // Using reduce flat data array
  let newFlatData = data.reduce((acc, cv) => {
    acc = acc.concat(cv);
    return acc;
  }, []);

  const dataTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11], 12],
  ];
  
  // Using reduce flat dataTwo array
  let newFlatDataTwo = datatwo.reduce((acc, cv) => {
    acc = acc.concat(cv.flat(Infinity));
    return acc;
  }, []);
  
  /*
  Create these functions which accepts a number value and returns a number value:
    - `increment` adds one to the input value
    - `double` doubles the input value
    - `decrement` decrement 1 from the value 
    - `triple` triples the input 
    - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
  */

    // increment
    function increment(num) {
      return num + 1;
    }
    // double
    function double(num) {
      return num * 2;
    }
    // decrement
    function increment(num) {
      return num - 1;
    }
    // triple
    function double(num) {
      return num * 3;
    }
    // half
    function double(num) {
      return math.round(num / 2);
    }



  // let pipeline = [
  //   increment,
  //   double,
  //   decrement,
  //   decrement,
  //   double,
  //   triple,
  //   half,
  //   increment,
  // ];
  
  /*
  Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
  NOTE: Initial value will be passed to first function the output of that function will be the input to next function.
  EXAMPLE:
    initialValue - 3
    increment(3) - return 4
    double(4) - return 8
    decrement(8) - return 7
    ...
  */
   pipeline.reduce((acc, cv) => {
     acc cv(acc);
     return acc;
   },3);

  // let pipeline2 = [
  //   increment,
  //   half,
  //   double,
  //   decrement,
  //   decrement,
  //   triple,
  //   double,
  //   triple,
  //   half,
  //   increment,
  //   triple,
  // ];

   pipeline.reduce((acc, cv) => {
     acc cv(acc);
     return acc;
   },8);
   
  // Find the output using pipeline2 the initial value if 8