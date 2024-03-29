/*
Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)
*/

function createInputElm(label, type = "text") {
  let createdLabel = document.createElement(`label`);
  createdLabel.innerText = label;

  let createInput = document.createElement(`input`);
  createInput.type = type;
   
  createdLabel.append(createInput);
  return createdLabel;
}
  

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label, type = "text") {
  let html = `<label>${label}: <input type="${type}"></label>`;
  return html;
};

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr){
  let ul = document.createElement(`ul`);
  arr.forEach(elm => {
    let li = document.createElement(`li`);
    li.innerText = elm;
    ul.append(li);
  });
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);


// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
// function createTodoList(arr){
//   let ul = document.createElement(`ul`);
//   arr.forEach(elm => {
//     let li = document.createElement(`li`)
//     let p = document.createElement(`p`);
//     p.innerText = elm.name;
//     let input = document.createElement(`input`);
//     input.type = "checkbox";
//     input.name = " ";
//     input.id = " ";
//     if (elm.isDone === true) {
//       input.setAttribute('checked', true);
//     }
//     let span = document.createElement("span");
//     span.innerText = "X";
//     li.append(p, input, span);
//     ul.append(li);
//   });
//   return ul;
// }


function createTodoList(data =[]) {
  let html = `<ul>
    ${data
      .map(
      (todo) => `
    <li>
      <p>${todo.name}</p>
      <input type="checkbox" ${todo.isDone ? "checked" : ""} name="" id="">
      <span>X</span>
    </li>`
      )
      .join("")}
    </ul>`;
    return html;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);