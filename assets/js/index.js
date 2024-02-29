let inputval = document.querySelector(".form-control");
let addbtn = document.querySelector(".btn");
let unordered = document.querySelector("ul");
let inpt = document.querySelector(".inpt");
let dlt = document.querySelector("#dlt");

inputval.placeholder = "write here";

EventListeners();

function EventListeners() {
  addbtn.addEventListener("click", todolist);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  unordered.addEventListener("click", deleteTodo);
  inpt.addEventListener("keyup", searchTodo);
  dlt.addEventListener("click", deleteAllTodo);
}

function deleteAllTodo() {
 while (unordered.firstElementChild != null) {
   unordered.removeChild(unordered.firstElementChild)
 }
 localStorage.removeItem("todos")
   
 } 


function searchTodo(e) {
  let val = e.target.value.toLowerCase();
  let lists = document.querySelectorAll("li");

  lists.forEach(function (list) {
    const listItem = list.textContent.toLowerCase();

    if (listItem.indexOf(val) === -1) {
      list.setAttribute("style", "display:none !important");
    } 
    else {
      list.setAttribute("style", "display:block !important");
    }
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-times") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
  }
}

function deleteTodoFromStorage(deletetodo) {
  let todos = GetTodosFromStorage();

  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      console.log("lele");
    } else {
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
  let todos = GetTodosFromStorage();
  todos.forEach((todo) => {
    AddTodoToUi(todo);
  });
}

function todolist() {
  const newTodo = inputval.value.trim();

  if (newTodo === "") {
    alert("Enter something");
  } else {
    AddTodoToUi(newTodo);
    AddTodoStorage(newTodo);
  }
}

function AddTodoToUi(newtodo) {
  let btncrt = document.createElement("button");
  btncrt.type = "button";
  btncrt.className = "close";
  btncrt.ariaLabel = "Close";
  btncrt.innerHTML = " <i class='fa fa-times' aria-hidden='true'></i>";

  let listt = document.createElement("li");
  listt.className = "list-group-item d-flex justify-content-between";
  listt.innerText = newtodo;
  listt.appendChild(btncrt);

  unordered.appendChild(listt);
  inputval.value = "";
}

function GetTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function AddTodoStorage(newtodo) {
  let todoss = GetTodosFromStorage();
  todoss.push(newtodo);
  localStorage.setItem("todos", JSON.stringify(todoss));
}
