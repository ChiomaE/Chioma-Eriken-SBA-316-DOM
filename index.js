let listOfTodos = [];

//Create new todo on button submit
function submitTodo() {
  let todoInput = document.getElementById("todoInput");
  console.log(todoInput.value);
  let newTodoItem = document.createElement("li");
  newTodoItem.classList.add("todoItem");
  newTodoItem.textContent = todoInput.value;
  todoList.appendChild(newTodoItem);
}

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitTodo);

let todoList = document.getElementById("todoList");
