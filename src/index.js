document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", addNewTask);

});
const addNewTask = event => {
  event.preventDefault();
  const taskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;
  newTaskAppend(newTask);
};
function newTaskAppend(task) {
  document.getElementById("tasks").appendChild(task);
}
