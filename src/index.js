document.addEventListener("DOMContentLoaded", () => {
  const formField = document.querySelector("#create-task-form");
  const todoList = document.querySelector("#tasks");
  const description = document.querySelector("#new-task-description");

  formField.addEventListener("submit, function(event)") {
    event.preventDefault();
    console.log("submitted");
    createTask();
  }

  function createTask() {
    let li = document.createElement("li");
    li.innerHTML = description.value;

    todoList.append(li);
    formField.reset();
  }
});
