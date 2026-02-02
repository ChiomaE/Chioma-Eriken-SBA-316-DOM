let todoInput;
let newTodoItem;
let userName = "";

//Get user's name to display on start
if (userName === "" || userName === null) {
  userName = window.prompt("Enter your name below.");
}
let mainTitle = document.getElementById("mainContent");
let titleDiv = document.createElement("h1");
titleDiv.textContent = `${userName}'s Todo List`;
console.log(titleDiv);
mainTitle.appendChild(titleDiv);

//Create new todo on button submit
function submitTodo() {
  todoInput = document.getElementById("todoInput");
  newTodoItem = document.createElement("li");
  newTodoItem.classList.add("todoItem");
  newTodoItem.textContent = todoInput.value;
  newTodoItem.addEventListener("click", deleteTodo);
  todoList.appendChild(newTodoItem);
}

function deleteTodo() {
  if (window.confirm("Are you sure you want to delete this todo item?")) {
    todoList.removeChild(event.target);
  }
}

let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", submitTodo);

let todoList = document.getElementById("todoList");
