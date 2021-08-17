//
const input = document.querySelector("input");
const button = document.querySelector(".button");
const tasks = document.querySelector(".tasks");
let lists = [];

if (localStorage.getItem("lists")) {
  lists = JSON.parse(localStorage.getItem("lists"));
  lists.forEach((list, index) => {
    const task = document.createElement("p");
    const remove = document.createElement("button");
    task.classList.add("task");
    remove.classList.add("remove");
    remove.innerHTML = '<i class="fas fa-trash"></i>';
    task.innerText = list;
    task.appendChild(remove);
    tasks.appendChild(task);

    remove.addEventListener("click", () => {
      task.remove();
      lists.splice(index, 1);
      localStorage.setItem("lists", JSON.stringify(lists));
    });
  });
}

const add = (e) => {
  e.preventDefault();

  if (input.value) {
    lists.push(input.value);
    localStorage.setItem("lists", JSON.stringify(lists));

    const task = document.createElement("p");
    const remove = document.createElement("button");
    task.classList.add("task");
    remove.classList.add("remove");
    remove.innerHTML = '<i class="fas fa-trash"></i>';
    task.innerText = input.value;
    input.value = "";
    task.appendChild(remove);
    tasks.appendChild(task);

    lists.forEach((list, index) => {
      remove.addEventListener("click", () => {
        task.remove();
        lists.splice(index);
        localStorage.setItem("lists", JSON.stringify(lists));
      });
    });
  }

  input.focus();
};

button.addEventListener("click", add);
