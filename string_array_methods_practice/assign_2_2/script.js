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
  
  // Create an array peopleName and store value of name key from persons array
  let peopleName = persons.map((people) => people.name);

  // Create an array peopleGrade and store the value of grade key from persons array
  let peopleGrade = persons.map((people) => people.grade);

  // Create an array peopleSex and store the value of sex key from persons array
  let peopleSex = persons.map((people) => people.sex);
  
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
  let filteredName = persons.filter((people) => 
   people.name.startsWith("J") || 
   people.name.startsWith("P")
   );
  
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
  let filteredNameAorC = peopleName.filter((people) =>
   people.startsWith("A") || 
   people.startsWith("C")
  );
  // Log all the filtered male ('M') in persons array
  let filterMale = persons.filter((people) => people.sex.includes("M"));

  // Log all the filtered female ('F') in persons array
  let filterFemale = persons.filter((people) => people.sex.includes("F"));

  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  let filterFemaleCorJ = persons.filter((people) =>    
    (people.name.startsWith("J") || 
     people.name.startsWith("C")) && 
     people.sex.includes("F")
    );
  // Log all the even numbers from peopleGrade array
  let isEven = peopleGrade.filter((num) => num % 2 === 0);
  
  // Find the first name that starts with 'J' in persons array and log the object

  let filterFirstNameJ = persons.filter((people) => 
   people.name.startsWith("J"));

   console.log(filterFirstNameJ[0])
  // Find the first name that starts with 'P' in persons array and log the object
  let filterFirstNameP = persons.find((people) => 
  people.name.startsWith("P"));

  console.log(filterFirstNameP);

  // Find the first name that starts with 'J', grade is greater than 10 and is a female
  let findFemaleNameJgreaterTen = persons.find((people) => 
    (people.name.includes("J") && 
    people.grade > 10 && 
    people.sex.includes("F"))
  );

  // Filter all the female from persons array and store in femalePersons array
  let femalePersons = [...filterFemale]

  // Filter all the male from persons array and store in malePersons array
  let malePersons = [...filterMale]

  // Find the sum of all grades and store in gradeTotal
  let gradeTotal = peopleGrade.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  },0);

  // Find the average grade
  let averageGrade = gradeTotal / peopleGrade.length

  // Find the average grade of male

   let averageGradeMale = filterMale.reduce((acc, cv) => {
    acc = acc + cv.grade;
    return acc;
  },0) / filterMale.length;

  // Find the average grade of female
  let averageGradeFemale = filterFemale.reduce((acc, cv) => {
    acc = acc + cv.grade;
    return acc;
  },0) / filterFemale.length;

  // Find the highest grade
  let highestGrade = peopleGrade.sort((a,b) => a - b).pop();

  // Find the highest grade in male
  let highestGradeMale = filterMale.sort((a,b) => a - b).pop();

  // Find the highest grade in female
  let highestGradeFemale = filterFemale.sort((a,b) => a - b).pop();

  // Find the highest grade for people whose name starts with 'J' or 'P'
  let highestGradeJorP = filteredName.sort((a,b) => a - b).pop();

  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
  let ascendingGrade = peopleGrade.sort((a,b) => a - b);   // yes, it changed

  // Sort the peopleGrade in descending order
  let descendingGrade = peopleGrade.sort((a,b) => b - a); 

  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  let ascendingGradeNoMutate = [...peopleGrade].sort((a,b) => a - b);

  // Sort the array peopelName in ascending `ABCD..Za....z`
  let ascendingName = peopleName.sort();  
  
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
  let ascendingNameNoMutate = [...peopleName].sort();