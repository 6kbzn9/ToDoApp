//
const input = document.querySelector("input");
const button = document.querySelector(".button");
const tasks = document.querySelector(".tasks");

const add = (e) => {
  e.preventDefault();
  if (input.value != "") {
    const todo = document.createElement("p");
    todo.classList.add("task");
    todo.innerText = input.value;
    input.value = "";
    tasks.appendChild(todo);
  }
  input.focus();
};

button.addEventListener("click", add);
