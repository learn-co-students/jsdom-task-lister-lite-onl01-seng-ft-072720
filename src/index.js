document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")

  taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    const taskList = document.querySelector("#tasks")
    const newTask = document.querySelector("#new-task-description").value
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask
    taskList.appendChild(taskItem)
    const newButton = document.createElement("button");
    const buttonWord = document.createTextNode("Delete");
    taskItem.appendChild(newButton);
    taskForm.reset()
    newButton.addEventListener("click", function(e) {
      e.target.parentElement.remove()
    })
  })
});
