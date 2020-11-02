//The deliverables require you to handle an event in a form based on clicking 
//a submit button. You're going to need to listen for a submit event on the <form> element.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let inputTag = document.querySelector('input#new-task-description');
    let inputValue = inputTag.value;

    let newLi = document.createElement('li');
    newLi.innerText = inputValue;

    let ulTag = document.querySelector('ul#tasks');
    ulTag.append(newLi);
    inputTag.value = '';
    
  })
});
