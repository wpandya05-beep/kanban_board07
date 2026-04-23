// Add new task
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

// Drag start
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Allow drop
function allowDrop(event) {
  event.preventDefault();
}

// Drop task
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const task = document.getElementById(data);

  if (event.target.classList.contains("column")) {
    event.target.querySelector("div").appendChild(task);
  } else if (event.target.classList.contains("task")) {
    event.target.parentNode.appendChild(task);
  } else {
    event.target.appendChild(task);
  }
}
