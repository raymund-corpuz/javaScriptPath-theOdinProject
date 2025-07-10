const taskInputDOM = document.querySelector(".task-input");
const taskButtonDOM = document.querySelector(".task-button");
const taskListUl = document.querySelector(".task-list");

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
  console.log(newTask);
  renderTaskInterface(newTask);
}

function renderTaskInterface(task) {
  const taskItemDOM = document.createElement("li");
  const taskDelete = document.createElement("span");

  taskItemDOM.classList.add("task-item");
  taskDelete.classList.add("del-btn");

  //props
  taskItemDOM.innerText = task.task;
  taskDelete.innerHTML = `<i class='bxr  bx-trash-x'  ></i> `;

  //append
  taskListUl.appendChild(taskItemDOM);
  taskItemDOM.appendChild(taskDelete);

  //reset input
  taskInputDOM.value = "";
}
