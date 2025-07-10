const taskInputDOM = document.querySelector(".task-input");
const taskButtonDOM = document.querySelector(".task-button");
const taskListUl = document.querySelector(".task-list");

const taskArray = [];

class TaskItem {
  constructor(task) {
    this.task = task;
    this.isComplete = false;
    this.taskId = Date.now();
  }

  getData() {
    return `Task: ${this.task}, Completed: ${this.isComplete}, Id: ${this.taskId}`;
  }
}

taskButtonDOM.addEventListener("click", createTask);

function createTask(e) {
  e.preventDefault();
  const myNewTask = taskInputDOM.value.trim();

  if (!myNewTask) return; // ✅ Prevent empty task

  const newTask = new TaskItem(myNewTask);
  taskArray.push(newTask);
  renderTaskInterface(newTask);
  taskInputDOM.value = ""; // ✅ Clear input after adding
}

function renderTaskInterface(task) {
  const taskItemDOM = document.createElement("li");
  const taskDelete = document.createElement("button");

  taskItemDOM.classList.add("task-item");
  taskDelete.classList.add("del-btn");

  taskItemDOM.innerText = task.task;
  taskDelete.textContent = "Delete";

  taskItemDOM.appendChild(taskDelete);
  taskListUl.appendChild(taskItemDOM);

  // ✅ Delete handler (per task)
  taskDelete.addEventListener("click", () => {
    taskItemDOM.remove(); // removes from UI
    const index = taskArray.findIndex((t) => t.taskId === task.taskId);
    if (index !== -1) taskArray.splice(index, 1); // removes from array
    console.log("Deleted:", task.getData());
  });
}
