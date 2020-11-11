document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const newTask = document.querySelector("#new-task-description").value
    const taskList = document.querySelector("#tasks")
    taskList.innerHTML += `
      <li>${newTask}
      <button class="delete"> Delete </button>
      </li>
    `
    taskForm.reset()
  })
});
taskList.addEventListener("click", function(event) {
  console.log(event.target)
  debugger
})