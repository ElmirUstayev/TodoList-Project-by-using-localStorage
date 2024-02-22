let inputval=document.querySelector(".form-control")
let addbtn=document.querySelector(".btn")
inputval.placeholder="write here"
addbtn.addEventListener("click",todolist);
let unordered=document.querySelector("ul");

function todolist() { 
    
   if (inputval.value==="") {
      alert("Enter something")
   }
   
   else{
    let btncrt=document.createElement("button");
    btncrt.type="button"
    btncrt.className="close"
    btncrt.ariaLabel="Close"
    btncrt.innerHTML="<span aria-hidden='true'>&times;</span>"

    let listt=document.createElement("li");     
    listt.className="list-group-item d-flex justify-content-between";
    listt.innerText=inputval.value;
    listt.appendChild(btncrt);

    unordered.appendChild(listt)
    inputval.value=""   
   }
 }
