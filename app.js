//
const input = document.querySelector("input");
const button = document.querySelector(".button");
const tasks = document.querySelector(".tasks");
let lists = [];

if (localStorage.getItem("lists")) {
  lists = JSON.parse(localStorage.getItem("lists"));
  lists.forEach((list) => {
    const task = document.createElement("p");
    const remove = document.createElement("button");
    task.classList.add("task");
    remove.classList.add("remove");
    remove.innerHTML = '<i class="fas fa-trash"></i>';
    task.innerText = list;
    task.appendChild(remove);
    tasks.appendChild(task);

    remove.addEventListener("click", () => {
      let index = task.innerText;
      lists.splice(lists.indexOf(index), 1);
      localStorage.setItem("lists", JSON.stringify(lists));
      task.remove();
    });
  });
}

const add = (e) => {
  e.preventDefault();

  const task = document.createElement("p");
  const remove = document.createElement("button");
  task.classList.add("task");
  remove.classList.add("remove");
  remove.innerHTML = '<i class="fas fa-trash"></i>';
  task.innerText = input.value;
  task.appendChild(remove);
  if (input.value) {
    lists.push(input.value);
    tasks.appendChild(task);
  }
  localStorage.setItem("lists", JSON.stringify(lists));
  input.value = "";

  remove.addEventListener("click", () => {
    let index = task.innerText;
    lists.splice(lists.indexOf(index), 1);
    localStorage.setItem("lists", JSON.stringify(lists));
    task.remove();
  });
};

button.addEventListener("click", add);
