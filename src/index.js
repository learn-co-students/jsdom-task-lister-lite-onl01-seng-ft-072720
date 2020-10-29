document.addEventListener("DOMContentLoaded", () => {
  const formField = document.querySelector("#create-task-form");
  const todoList = document.querySelector("#tasks");
  const description = document.querySelector("#new-task-description");
  const priority = document.querySelector("#priority");
  // const button = document.createElement("button");


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
    li.style.color = priorityColor(priority.value);
    // debugger
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






