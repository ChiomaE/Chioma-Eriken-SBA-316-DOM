// let todoInput;
todoInput = document.getElementById("todoInput");
const regexTest = /\d/;
let newTodoItem;
let userName = "";

//Get user's name to display on start
userName = window.prompt("Enter your name below.");
while (userName === "" || userName === null) {
  userName = window.prompt("Enter your name below.");
}
let mainTitle = document.getElementById("todoTitle");
let titleDiv = document.createElement("h1");
titleDiv.textContent = `${userName}'s Todo List`;
console.log(titleDiv);
mainTitle.appendChild(titleDiv);

//Create new todo on button submit
function submitTodo() {
  //Check if todo contains number. if so, show message, color the input box, then return
  if (regexTest.test(todoInput.value)) {
    todoInput.style.backgroundColor = "red";
    alert(
      "Todo items cannot contain numbers. Please enter a todo item without numbers.",
    );
    return;
  } else if (todoInput.value === "") {
    alert("Input cannot be empty. Please enter a valid todo item.");
    return;
  }
  todoInput.style.backgroundColor = "white";
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
