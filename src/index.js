document.addEventListener("DOMContentLoaded", () => {
  const formField = document.querySelector("#create-task-form");
  const todoList = document.querySelector("#tasks");
  const description = document.querySelector("#new-task-description");
  const priority = document.querySelector("#priority");


  formField.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    createTask();
  })

  priority.addEventListener("change", function(event) {
    console.log("selected")
  })

  function createTask() {
    let li = document.createElement("li");
    li.innerHTML = description.value;

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.id = description.value;
    button.addEventListener("click", function(event) {
      li.remove();
      button.remove();
    })

    li.append(button);
    li.style.color = priorityColor(priority.value);
    todoList.append(li);
    formField.reset();
  }




  function priorityColor(priority) {
    switch(priority) {
      case "high":
        return "red";
        break;
      case "medium":
        return "yellow";
        break;
      case "low":
        return "green";
        break;
      default: 
        return "black";
        break;
    }
  }

});






