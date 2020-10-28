document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll('input')[1];
button.addEventListener('click', function (event) {
    let toDo = document.getElementById("tasks");
    let newLi = document.createElement("li")
    let item = document.getElementById("new-task-description").value
    newLi.textContent = item
    toDo.appendChild(newLi)
    event.preventDefault();
  });
});
