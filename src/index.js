document.addEventListener("DOMContentLoaded", () => {
  // your code here
  mountFormListener();


});

function getPostData(f) {
  return {
    task: f.querySelector("#new-task-description").value
  };
};

function mountFormListener() {
  const postForm = document.querySelector("#create-task-form");
  postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const postObj = getPostData(event.target);
    const todoList = document.querySelector("#tasks");
    const valueToBeAdded = document.createElement('li');
    valueToBeAdded.innerHTML = postObj.task
    todoList.appendChild(valueToBeAdded);
    postForm.reset();
  });

};
