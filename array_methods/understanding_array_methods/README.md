## Write in your own way of understanding  
### 1.Data types of parameters 
### 2.Return value type
### 3.Write three examples
### 4.In your words what this method does. 
### 5.Does it mutate the original value or not  

> ## **1. Concat**

#### 1.Parameters: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
#### 2.Return: a single Array consisting of by all the values passed as parameters in the same order.
#### 3.Write three examples:
```js
    let numbers = [1, 2, 3];
    numbers.concat(4); //[1,2,3,4]

    let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
    sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"

    let colors = ['red', 'green', 'blue'];
    colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
```
#### 4. Explain: concat accepts n number of values and returns one array with all the values in same order. It does not change the original array.

### 5.Does it mutate the original value or not: No it does not mutate the original array

> ## **2. Join**

#### 1.Parameters: input with Separater which  separate element of array
#### 2.Return: Return new array with separater
#### 3.Examples:
```js
    let users = ["Arya","jon"."Stark"]
    console.log(users.join(`++`)); // "Arya++jon++Stark"
    let users = ["Arya","jon"."Stark"]
    console.log(users.join(``)); // "AryajonStark"
    let users = ["4","3","2"]
    console.log(users.join(`+`)); //4+3+2;
```
#### 4.Join all elements of array in one string with separater, if any.
#### 5. It does't mutate. It create new string.

> ## **`2. Join`**

#### 1.Parameters: input with Separater which  separate element of array
#### 2.Return: Return new array with separater
#### 3.Examples:
```js
    let users = ["Arya","jon"."Stark"]
    console.log(users.join(`++`)); // "Arya++jon++Stark"
    let users = ["Arya","jon"."Stark"]
    console.log(users.join(``)); // "AryajonStark"
    let users = ["4","3","2"]
    console.log(users.join(`+`)); //4+3+2;
```
#### 4.Join all elements of array in one string with separater, if any.
#### 5. It does't mutate. It create new string.

> ## **`3. flat`**

#### 1.Parameters: It take input as number of array want  to join
#### 2.Return: Return new array with all elements.
#### 3.Examples:
```js
    let users = ["Arya",["jon",["Stark"]]];
    console.log(users.flat(2)); //["Arya", "jon", "Stark"]
    let numbers = [1,[2,[3,[4,[5,6]]]]]
    numbers.flat(Infinity); // [1, 2, 3, 4, 5, 6]
```
#### 4.Join all elements of array in new array as defined in parameter,
#### 5. It does't mutate.

> ## **`4. push`**

#### 1.Parameters: The element to add to end of the array
#### 2.Return: Lenght of array with added element at last.
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark"];
    users.push("dragon"); //["Arya", "jon", "Stark". "dragon"]
    let numbers = [1,2,3,4,5,6]
    numbers.push(8); // [1, 2, 3, 4, 5, 6,8]
```
#### 4.Add elements at end of array which is defined in parameter, to show elements call array.
#### 5. It mutate.

> ## **`5. indexOf`**

#### 1.Parameters: Element to called in array
#### 2.Return: Index of called elements
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    users.indexOf("dragon"); // 3
    let numbers = [1,2,3,4,5,6,8]
    numbers.indexOf(8); //   6
```
#### 4.Show index of called elements, -1 if not found
#### 5. It does,t mutate.

> ## **`6. lastindexOf`**

#### 1.Parameters: Element to called in array 
#### 2.Return: last index of called elements
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon","Arya"];
    users.lastIndexOf("Arya"); // 4
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.indexOf(6); //   7
```
#### 4.Show index of called elements, -1 if not found
#### 5. It does,t mutate.

> ## **`7. includes`**

#### 1.Parameters: value to search for
#### 2.Return: Return in boolean
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon","Arya"];
    users.includes("Arya"); // True
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.includes(9); //   False
```
#### 4.Returb in boolean, elements included in array or not.
#### 5. It does,t mutate.

> ## **`8. reverse`**

#### 1.Parameters: 
#### 2.Return: reverse the array, and show their index
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon","Arya"];
    users.reverse(); // ["Arya", "dragon", "Stark", "jon", "Arya"]
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.reverse(); //  [4, 6, 8, 6, 5, 4, 3, 2, 1]
```
#### 4.It reverse array
#### 5. It mutate.

> ## **`9. every`**

#### 1.Parameters: value, 
#### 2.Return: in boolean
#### 3.Examples:
```js
    function isGreaterthen10(numbers) {
        return numbers >10;
    };
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.every(isGreaterthen10); //  false
```
#### 4.If called value in present in every elements of array, it will return in boolean value
#### 5. It doesn't mutate.

> ## **`10. shift`**

#### 1.Parameters:  
#### 2.Return: deleted value
#### 3.Examples:
```js
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.shift(); //  1
```
#### 4. It delete first value of array and show that value in return. If array is called it show updated array without first value
#### 5. It mutate.

> ## **`11. splice`**

#### 1.Parameters:  Change and delete character at given index
#### 2.Return: deleted value
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    users.splice(2,1); //  ["Stark"]
```
#### 4. It delete called value of array and show that value in return. If array is called it show updated array without called value
#### 5. It mutate.

> ## **`12. find`**

#### 1.Parameters:  callback Function include,elements,index and array
#### 2.Return: only one value
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    function isArya(users) {
        return users === "Arya"
    }
    let findReturn = users.find(isArya); // Arya
    let numbers = [1,3,5,7,9,12,20,200]
    function greaterThanEight(numbers) {
        return numbers > 8
    }
    let findNumber = numbers.find(greaterThanEight)  // 9
```
#### 4. It is callbackFn which return only one(first) value which is called in find method
#### 5. It doesn't mutate.

> ## **`13. unshift`**

#### 1.Parameters:  
#### 2.Return: add value in starting of array
#### 3.Examples:
```js
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.unshift(32); //  10   //[32,1,2,3,4,5,6,8,6,4]
```
#### 4. It add value in starting of array and return index of array. If array is called it show updated array with first value
#### 5. It mutate.

> ## **`14. find`**

#### 1.Parameters:  callback Function include,elements,index and array
#### 2.Return: only one value
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    function isArya(users) {
        return users === "Arya"
    }
    let findReturn = users.findIndex(isArya); // 0
    let numbers = [1,3,5,7,9,12,20,200]
    function greaterThanEight(numbers) {
        return numbers > 
    }
    let findNumber = numbers.findindex(greaterThanEight)  // 4
```
#### 4. It is callbackFn which return index of only one(first) value which is called in findIndex method
#### 5. It doesn't mutate.

> ## **`15. filter`**

#### 1.Parameters:  callback Function include,elements,index and array
#### 2.Return: new array which pass the test
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    function islenghtMoreThanThree(users) {
        return users.lenght > 3
    }
    let return = users.filter(islenghtMoreThanThree); // ["Arya", "Stark", "dragon"]

    let numbers = [1,3,5,7,9,12,20,200]
    function greaterThanEight(numbers) {
        return numbers > 8
    }
    let filterNumber = numbers.filter(greaterThanEight)  // [9, 12, 20, 200]
```
#### 4. It is callbackFn which return new array which pass the test, if not, return empty array.
#### 5. It doesn't mutate.

> ## **`16. flat`**

#### 1.Parameters:  how deep a nesting array should be flattened
#### 2.Return: new array with called array concatenated in it 
#### 3.Examples:
```js
    let numbers = [1,3,[5,7,[9,12,[20,200]]]]
    numbers.flat(2)  // [1, 3, 5, 7, 9, 12, Array(2)]
    numbers.flat(infinity)  // [1, 3, 5, 7, 9, 12, 20, 200]
```
#### 4. It accept value and flattened called level of array. if infinity, flat all nesting of array.
#### 5. It doesn't mutate.

> ## **`15. forEach`**

#### 1.Parameters:  callback Function execute on each elements, accept 3 arguments - elements,index and array
#### 2.Return: undefined, if no value
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    function islenghtMoreThanThree(users) {
        return users.length > 3
    }
    let finalReturn = users.forEach(islengthMoreThanThree); ["Arya", "Stark", "dragon"]
     //

    let numbers = [1,3,5,7,9,12,20,200]
    function greaterThanEight(numbers) {
        return numbers > 8
    }
    let filterNumber = numbers.forEach(greaterThanEight)  // [9, 12, 20, 200]
```
#### 4. It is callbackFn which return undefined but it return value when called in new array.
#### 5. It doesn't mutate. 

> ## **`18. map`**

#### 1.Parameters:  callback Function execute on each elements, accept 3 arguments - elements,index and array
#### 2.Return: new array which pass the test
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark","dragon"];
    function islenghtMoreThanThree(users) {
        return users.length > 3
    }
    let finalReturn = users.forEach(islengthMoreThanThree); ["Arya", "Stark", "dragon"]
     //

    let numbers = [1,3,5,7,9,12,20,200]
    function greaterThanEight(numbers) {
        return numbers > 8
    }
    let filterNumber = numbers.forEach(greaterThanEight)  // [9, 12, 20, 200]
```
#### 4. It is callbackFn which return new array.
#### 5. It doesn't mutate. 

> ## **`19. pop`**

#### 1.Parameters: The element to remove from end of the array
#### 2.Return: Lenght of array after removing element from last.
#### 3.Examples:
```js
    let users = ["Arya","jon","Stark", "dragon"];
    users.pop(); //["Arya", "jon", "Stark"]
    let numbers = [1,2,3,4,5,6,8]
    numbers.pop(); // [1, 2, 3, 4, 5, 6]
```
#### 4.remove elements from end of array which is defined in parameter
#### 5. It mutate.

> ## **`20. reduce`**

#### 1.Parameters: accc, num
#### 2.Return: Add of called value
#### 3.Examples:
```js
    let numbers = [1,2,3,4,5,6,8,6,4]
    function reducer(acc, num){
        return acc + num
    }
    numbers.reduce(reducer); // 39
```
#### 4.it is call back function,which accept accumulator and value and add calledvalue
#### 5. It doesn't mutate.

> ## **`21. slice`**

#### 1.Parameters: index and number of elements want to slice
#### 2.Return: new sliced arrray
#### 3.Examples:
```js
    let numbers = [1,2,3,4,5,6,8,6,4]
    numbers.slice(2,2); // [1,2,5,6,8,6,4] 
```
#### 4.it accept index and number of elements want to slice and return that value in new array.
#### 5. It doesn't mutate.

> ## **`22. some`**

#### 1.Parameters: value, 
#### 2.Return: in boolean
#### 3.Examples:
```js
    let numbers = [1,2,3,4,5,6,8,6,4]

    function isGreaterthen10(numbers) {
        return numbers >10;
    };

    numbers.some(isGreaterthen10); //  true
```
#### 4.If called value in present in any elements of array, it will return in boolean value
#### 5. It doesn't mutate.