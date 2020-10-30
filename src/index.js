document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const taskCard = document.querySelector("#tasks")




  function getDescription(){
   return form.querySelector("#new-task-description").value;
  };
  
  form.addEventListener("submit", function(e){
    e.preventDefault();
    let newCard = document.createElement("li")
    taskCard.appendChild(newCard).innerHTML = getDescription();
    form.reset()
  });
});
