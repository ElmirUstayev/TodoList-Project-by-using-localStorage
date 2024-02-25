let inputval=document.querySelector(".form-control")
let addbtn=document.querySelector(".btn")
let unordered=document.querySelector("ul");
inputval.placeholder="write here"


addbtn.addEventListener("click",todolist);


function todolist() { 

    const newTodo=inputval.value.trim()

   if (newTodo==="") {      
      alert("Enter something")
   }
   
   else{
    AddTodoToUi(newTodo);
    AddTodoStorage(newTodo)
   }
 }



function AddTodoToUi(newtodo) {
    let btncrt=document.createElement("button");
    btncrt.type="button"
    btncrt.className="close"
    btncrt.ariaLabel="Close"
    btncrt.innerHTML="<span aria-hidden='true'>&times;</span>"

    let listt=document.createElement("li");     
    listt.className="list-group-item d-flex justify-content-between";
    listt.innerText=newtodo;
    listt.appendChild(btncrt);

    unordered.appendChild(listt)
    inputval.value=""  
}

function GetTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos")===null) {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }

    return todos;
}

function AddTodoStorage(newtodo) {
    let todoss=GetTodosFromStorage();
    todoss.push(newtodo);
    localStorage.setItem("todos",JSON.stringify(todoss))
}