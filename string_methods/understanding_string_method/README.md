### 1.Practice it by yourself in console (4-5 times to understand)
### 2.Data types of parameters
### 3.Return value type
### 4.Write three examples
### In your own words, explain what this method does.


## **1.charAt**

### 1. Parameter: index, default to 0. (number data type)
### 2. Return: Character at specific inderx in the string
### 3. Example:

```
     let user = "Rockey";
    user.charAt(2); // "c"
    let city = "New York";
    city.charAt(5);  // "o"
```
### 4. CharAt accepts index and return the character on that index.

## **2.toUpperCase**

### 1. Parameter: not required input in parameter
### 2. Return: New String and conver to upper case
### 3. Example:
``` 
    let user = "Rockey";
    user.toUpperCase(); // "ROCKEY"
    let city = "New York";
    city.toUpperCse();  // "NEW YORK"
```
### 4. toUpperCase accept string and covert into upper case

## **3.toloweerCase**

### 1. Parameter: not required input in parameter
### 2. Return: New String and conver to lower case
### 3. Example:
``` 
    let user = "Rockey";
    user.toLowerCase(); // "rocket"
    let city = "New York";
    city.toLowerCse();  // "new york"
```
### 4. toLowerCase accept string and covert into lower case

## **4.trim**

### 1. Parameter: not required input in parameter
### 2. Return: New String and remove whitespace from both side
### 3. Example:
``` 
    let user = "      Rockey      ";
    user.trim(); // "Rocket"
    let city = "  New York       ";
    city.trim();  // "New York"
```
### 4. trim accept string and remove whitespace from string


## **5.trimEnd**

### 1. Parameter: not required input in parameter
### 2. Return: New String and remove whitespace from end of string
### 3. Example:
``` 
    let user = "      Rockey      ";
    user.trim(); // "        Rocket"
    let city = "  New York       ";
    city.trim();  // "        New York"
```
### 4. trimEnd accept string and remove whitespace from end of string

## **6.trimStart**

### 1. Parameter: not required input in parameter
### 2. Return: New String and remove whitespace from starting of string
### 3. Example:
``` 
    let user = "      Rockey      ";
    user.trim(); // "Rocket      "
    let city = "  New York       ";
    city.trim();  // "New York     "
```
### 4. trimEnd accept string and remove whitespace from starting of string

## **7.concat**

### 1. Parameter: one or more string (string data type)
### 2. Return: All string concatinated in one string
### 3. Example:
``` 
    let Hello = "Hello";
    let city = "New York";
    
    hello.concat( " ", "city")
```
### 4. concat accept string and concatinate at single string

## **8.endsWith**

### 1. Parameter: Character search at end (string data type)
### 2. Return: boolean value
### 3. Example:
```
    let user = "Rockey";
    user.endsWith(y)  // true
     
    let city = "New York";
    city.endsWith(y)  // false
    
```
### 4. endsWith accept string and check either it end with given value

## **9.includes**

### 1. Parameter: Character is included in string (string data type)
### 2. Return: boolean value
### 3. Example:
```
    let user = "Rockey";
    user.includes("y")  // true
     
    let city = "New York";
    city.includes("a")  // false
    
```
### 4. includes accept string and check the given value is included in string  or not and return in boolean value.

## **10.indexOf**

### 1. Parameter: Character's position in string (string data type)
### 2. Return: position of chatacter(number data type)  if not return -1
### 3. Example:
```
    let learn = "learning web development is not easy";
    learn.indexOf("is")  // 23
    learn.indexOf("fun") // -1
     
```
### 4. indexOf accept string and check the position of  given value of not return -1

## **11.lastIndexOf**

### 1. Parameter: String end with given character (string data type)
### 2. Return: position of chatacter(number data type)  if not return -1
### 3. Example:
```
    let learn = "learning web development is not easy";
    learn.lastIndexOf("t")  // 30
    learn.lastIndexOf("f") // -1
     
```
### 4. lastIndexOf accept string and check the either it end with given value if so retuen position of character if not return -1.

## **12.padEnd**

### 1. Parameter: total character lenght (number data type) and character add at end (string data type)
### 2. Return: String with padding at last, if given vvalue, it will add at end
### 3. Example:
```
    let user = "Rockey";
    user.padEnd(12, "$")  // "Rockey$$$$$$"
    user,padEnd(10, "!") //  "Rockey!!!!"
     
```
### 4. padEnd take input of total lenght of string and character added at last, it return  string with padding at ending or character which we assign

## **13.padStart**

### 1. Parameter: total character lenght (number data type) and character add at starting (string data type)

### 2. Return: String with padding at starting, if given value, it will add at starting

### 3. Example:
```
    let user = "Rockey";
    user.padStart(12, "$")  // "$$$$$$Rockey"

    24.padStart(5, 0)    // 00024
     
```
### 4. padEnd take input of total lenght of string and character added at starting, it return string with padding at starting or character which we assigned

## **14.repeat**

### 1. Parameter: no of times repeat (number data type)

### 2. Return: String with repeated value

### 3. Example:

```
    let user = "Rockey";
    user.repeat(3)  // "RockeyRockeyRockey"

    24.padStart(5)    // 2424242424
```

### 4. repeat take input of number and return the value that numbers of time in string

## **15.replace**

### 1. Parameter: replaccble character with given character (string data type)

### 2. Return: replace by given character

### 3. Example:
```
    let user = "Rockey";
    user.replace("e", "o")  // "Rockoy"

    let learn = "learning web development is not easy";
    learn.replace("i", "o")  // "learnong web development os not easy"
```
### 4. replace replace the value which we assign to replace.

## **16.slice**

### 1. Parameter: biginIndex, or and endindex  (number data type)

### 2. Return: Character from biginindex to endindex

### 3. Example:
```
    let learn = "learning web development is not easy";
    learn.slice(2, 20)  // "arning web develop"
    learn.slice(10)   //  "eb development is not easy"
```
### 4. slice only show character between given parameter

## **17.split**

### 1. Parameter: 

### 2. Return: return array split with space in world

### 3. Example:
```
let learn = "learning web development is not easy";
    learn.split("");
(36) ["l", "e", "a", "r", "n", "i", "n", "g", " ", "w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", " ", "i", "s", " ", "n", "o", "t", " ", "e", "a", "s", "y"]

    
```
### 4.

## **18.substring**

### 1. Parameter: biginIndex, or and endindex  (number data type)

### 2. Return: Character from biginindex to endindex

### 3. Example:
```
    let learn = "learning web development is not easy";
    learn.slice(2, 20)  // "arning web develop"
    learn.slice(10)   //  "eb development is not easy"
    
```
### 4.its same like slice but can return according to reverse input.like we can input (20,2) inplace of(2,20)

