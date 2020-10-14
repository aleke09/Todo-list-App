// selectors
const todoBtn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// event listeners
// document.addEventListener('DOMContentLoaded', getTodos)
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

// functions
function addTodo(event){
    // create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
//     // add todo to local Storage
//     saveLocalTodos(todoInput.value);

    // completed button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-check"></>';
    checkBtn.classList.add('complete-btn');
    todoDiv.appendChild(checkBtn);
    // delete button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fa fa-trash"></>';
    trashBtn.classList.add('delete-btn');
    todoDiv.appendChild(trashBtn);
    // append div to todolist
    todoList.appendChild(todoDiv);

    // clear todo input after 
    todoInput.value = " ";
    //prevent the default behaviour of the browser
    event.preventDefault();
};
 
// delete and check function
function deleteCheck(event){
    const item = event.target;
   
    // delete todo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
    
        // add animation here
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }
    // check todo
    if(item.classList.contains('complete-btn')){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        
    }   

    event.preventDefault(); 
};
   
// function filterTodo(event){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(event.target.value){
//             case "all":
//                todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains('completed')){
//                     todo.style.display = "flex"; 
//                 }
//                 else{
//                     todo.style.display = "none";
//                 }
//         }
//     });
  
//     event.preventDefault();
// }

// function saveLocalTodos(todo){
//     // check if todo isEmpty
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// };

// function getTodos(){
//     let todos;
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach(function(todo){
//         const todoDiv = document.createElement('div');
//         todoDiv.classList.add('todo');
//         // create li
//         const newTodo = document.createElement('li');
//         newTodo.innerText = todo;
//         newTodo.classList.add('todo-item');
//         todoDiv.appendChild(newTodo);
//         // completed button
//         const checkBtn = document.createElement('button');
//         checkBtn.innerHTML = '<i class="fa fa-check"></>';
//         checkBtn.classList.add('complete-btn');
//         todoDiv.appendChild(checkBtn);
//         // delete button
//         const trashBtn = document.createElement('button');
//         trashBtn.innerHTML = '<i class="fa fa-trash"></>';
//         trashBtn.classList.add('delete-btn');
//         todoDiv.appendChild(trashBtn);
//         // append div to todolist
//         todoList.appendChild(todoDiv);

//     });
// };

// function removeLocalTodos(todo){
//     let todos;
//     // check if todo isEmpty
//     if(localStorage.getItem('todos') === null){
//         todos = [];
//     }
//     else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
//     // const todoIndex = 
// }