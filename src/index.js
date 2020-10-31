document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    const task = document.getElementById("new-task-description").value
    const ul = document.querySelector("ul#tasks")
    const li = document.createElement("li")
    li.textContent = `${task}`
    ul.appendChild(li)
    
  }
  )
  

});
