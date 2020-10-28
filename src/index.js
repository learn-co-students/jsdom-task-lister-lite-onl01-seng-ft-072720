document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });



const button = document.querySelectorAll('input')[1];

button.addEventListener('click', function(event)  {
  let toDo = document.querySelector("#tasks");
  let newLi = document.createElement("li")
  let theText = document.getElementById("new-task-description").value
  newLi.textContent = theText
  toDo.appendChild(newLi)
  event.preventDefault();
});


// function theClinking() {
//   let toDo = document.querySelector("#tasks");
//   let newLi = document.createElement("li")
//   newLi.textContent = "More stuff"
// toDo.appendChild(newLi)
  // let newLi = document.createElement("li");
 // newLi.innerText = 'Tony';
  //document.body.div.div.ul.append(newLi);
  
//}
//debugger