// script.js
function addTask(columnId) {
  let inputId =
    columnId === "task"
      ? "taskInput"
      : columnId === "inprogress"
      ? "progressInput"
      : "doneInput";

  let input = document.getElementById(inputId);
  let value = input.value.trim();

  if (value === "") return;

  let task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.innerText = value;
  task.id = "task-" + Date.now();

  task.addEventListener("dragstart", drag);

  document.getElementById(columnId).appendChild(task);
  input.value = "";
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const task = document.getElementById(data);

  if (event.target.classList.contains("task-container")) {
    event.target.appendChild(task);
  }
}
