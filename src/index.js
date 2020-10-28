document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let userInput = document.getElementById("new-task-description");
    let taskList = document.getElementById("tasks");

    if (userInput.value != "") {
      const newLi = document.createElement("li");
      const newTask = document.createTextNode(`${userInput.value} `);
      const newButton = document.createElement("button");
      const buttonText = document.createTextNode("X");
      newLi.appendChild(newTask);
      newButton.appendChild(buttonText);
      newLi.appendChild(newButton)
      taskList.appendChild(newLi);
      userInput.value = "";
      newButton.addEventListener("click", function(e) {
        e.target.parentElement.remove()
      })
    };
  }, false);


});