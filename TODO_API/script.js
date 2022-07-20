let inputText = document.querySelector("#input");
let root = document.querySelector("ul");

let baseURL = 'https://basic-todo-api.vercel.app/api/todo';



let isTrue = false;

function handleToggle(id, status) {
    let data = {
        todo: {
            isCompleted: !status,
        }
    }

    fetch(baseURL + `/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }).then(() => main());
}


function handleEdit(event, id, title){
    let input = document.createElement("input");
    input.value = title;
    let p = event.target;
    let parent = event.target.parentElement;
    parent.replaceChild(input, p);
    input.addEventListener("keyup", (event) => {
        if(event.keyCode === 13 && event.target.value) {
            let data = {
                todo: {
                    title: `${event.target.value}`,
                }
            }
        
            fetch(baseURL + `/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            }).then(() => main());
        }
    })
}


function displayUI(allTodos) {
        root.innerHTML = "";
        allTodos.forEach((todo) => {
            let li = document.createElement("li");
            li.classList.add("list-items");

            let input = document.createElement("input");
            input.classList.add("checkbox")
            input.type = "checkbox";
            input.checked = todo.isCompleted;
            input.id = todo._id;
            input.addEventListener("click", () => {
             handleToggle(todo._id, todo.isCompleted);
            });

            let p = document.createElement("p");
            p.classList.add("todo-name")
            p.innerText = todo.title;
            p.addEventListener("dblclick", (event) => {
                handleEdit(event, todo._id, todo.title);
            });
            
            let span = document.createElement("span");
            span.innerText = "❌";
            span.classList.add("close");
            span.addEventListener("click", (e) => {
                deleteTodo(todo._id);
            })
            li.append(input, p, span);
            root.append(li);
        })     
}

// root.addEventListener('dblclick', editPara);

function addTodo(event) {
    if(event.keyCode === 13 && event.target.value.trim()) {
        let data = {
            todo: {
                title: `${event.target.value}`,
                isCompleted: false
            }
        }
        
        event.target.value = "";
        fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => main());
        
    } 
    
}


// edit para 
// function editPara (eventp) {
//      if ( eventp.target.tagName = 'p'){
//         var currentPvalue = eventp.target;
//         eventp.target.nextElementSibling.classList.add('hideOnDblClick');
//         var inputP = document.createElement('input');
//         inputP.classList.add('editinputP');
//         inputP.value = currentPvalue.textContent;
//         // console.log(inputP.value);
//         currentPvalue.parentElement.replaceChild(inputP, currentPvalue);
//         inputP.addEventListener ('keyup', backToPara);
//         function backToPara(e) {
//             if(e.keyCode === 13 && e.target.value != ''){
//                 currentPvalue.textContent = e.target.value;
//                 e.target.parentElement.replaceChild(currentPvalue, inputP); 
//                 currentPvalue.nextElementSibling.classList.remove('hideOnDblClick');
//                 console.log(currentPvalue.parentElement);
//            }
//         }
//     }
// }


// function updateTitle(id, status) {
//     let data = {
//         todo: {
//             title: `${currentPvalue}`,
//             isCompleted: status,
//         }
//     }

//     fetch(baseURL + `/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data),
//     }).then(() => main());
// }


function deleteTodo(id) {
    fetch(baseURL + `/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
       
    }).then(() => main());
}


function main () {
    fetch(baseURL)
    .then(response => response.json())
    .then((data) => displayUI(data.todos));
} 

inputText.addEventListener("keyup", addTodo);



main();


// let data = {
//     todo : {
//         title : 'Learn JS',
//         isComplete : false
//     }
// };

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'content-type' : 'application/json',
//     },
//     body : JSON.stringify(data),
// });

// let data = {
//     todo : {
//         title : 'Learn JS',
//     }
// };

// fetch(url + _'/628641df2038f400096aaa16', {
//     method: 'PUT',
//     headers: {
//         'content-type' : 'application/json',
//     },
//     body : JSON.stringify(data),
// });


// fetch(url + id, {
//     method: 'DELETE',
//     headers: {
//         'content-type' : 'application/json',
//     },
//     body : JSON.stringify(data),
// });
