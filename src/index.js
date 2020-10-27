document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input")[1].addEventListener("click", function(event){
    let desc = document.querySelectorAll("input")[0];
    document.getElementById("list")
    .innerText = desc.innerHTML;
    event.preventDefault();
  })
});
