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
    return `Task ${this.task}, Completed: ${task.isComplete}, Id: ${this.taskId}`;
  }
}

taskButtonDOM.addEventListener("click", createTask);

function createTask(e) {
  e.preventDefault();
  const myNewTask = taskInputDOM.value;
  const newTask = new TaskItem(myNewTask);
  renderTaskInterface(newTask);
  taskArray.push(newTask);
  console.log(taskArray);
}

function renderTaskInterface(task) {
  const taskItemDOM = document.createElement("li");
  const taskDelete = document.createElement("button");

  taskItemDOM.classList.add("task-item");
  taskDelete.classList.add("del-btn");

  //props
  taskItemDOM.innerText = task.task;
  taskDelete.textContent = `delete`;

  //append
  taskListUl.appendChild(taskItemDOM);

  taskItemDOM.appendChild(taskDelete);

  //reset input
  taskInputDOM.value = "";

  //delte
  const deleteBtn = document.querySelectorAll(".del-btn");
  deleteBtn.forEach((delBtn) => {
    delBtn.addEventListener("click", removeTaskInput);
  });
}

function removeTaskInput() {
  console.log("delete");
}
