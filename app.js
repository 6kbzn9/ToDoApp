//
const input = document.querySelector("input");
const button = document.querySelector(".button");
const tasks = document.querySelector(".tasks");

const add = (e) => {
  e.preventDefault();
  const task = document.createElement("p");
  const remove = document.createElement("button");
  if (input.value != "") {
    task.classList.add("task");
    remove.classList.add("remove");
    remove.innerHTML = '<i class="fas fa-trash"></i>';
    task.innerText = input.value;
    input.value = "";
    task.appendChild(remove);
    tasks.appendChild(task);
  }
  remove.addEventListener("click", () => {
    task.remove();
  });
  input.focus();
};

button.addEventListener("click", add);
