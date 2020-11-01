document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()

    //user input
    const newTask = document.querySelector("#new-task-description").value
    // put it on the document
    //where?

    // adds to the DOM right away:
    taskList.innerHTML += `
    <li> ${newTask} 
      <button data-action="delete"> Delete Item </button>
    </li>
    ` 

    //same as above:
    // const taskItem = document.createElement("li")
    // taskItem.innerText = newTask
    //taskList.appendChild(taskItem)
    taskForm.reset()
  })

  taskList.addEventListener("click", function(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })
});
