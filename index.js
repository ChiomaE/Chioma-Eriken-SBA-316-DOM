let firstTodo = true;

function createEventTodoListener() {}

//Create new todo on button submit
function submitTodo() {
  let todoInput = document.getElementById("todoInput");
  let newTodoItem = document.createElement("li");
  newTodoItem.classList.add("todoItem");
  newTodoItem.textContent = todoInput.value;
  newTodoItem.addEventListener("click", deleteTodo);
  todoList.appendChild(newTodoItem);
}

function deleteTodo() {
  todoList.removeChild(event.target);
}

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitTodo);

let todoList = document.getElementById("todoList");
