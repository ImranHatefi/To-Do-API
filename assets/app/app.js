const URL = "https://crudapp-pwlck5pebq-el.a.run.app/api/todos";
let deletebtn = document.querySelector(".delete");
function writer() {
  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
      const todos = data.todos;
      console.log(todos);
      todos.forEach((element) => {
        document.querySelector("#tasks").innerHTML += `
        <div class="task" id="task">
            <span id="taskname">
                ${element.title}
            </span>
            <button onclick = deleteId('${element.id}') class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;
      });
    });
}
writer();

let input = document.querySelector("#newtaskinput");
let button = document.querySelector("#push");
let tasks = document.querySelector("#tasks");

button.addEventListener("click", () => {
  let value = input.value;
  fetch("https://crudapp-pwlck5pebq-el.a.run.app/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: value }),
  }).then(() => {
    tasks.innerHTML = "";
    value = "";
    writer();
  });
});

function deleteId(id) {
    fetch(`https://crudapp-pwlck5pebq-el.a.run.app/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      tasks.innerHTML = "";
      writer();
    });
  }
