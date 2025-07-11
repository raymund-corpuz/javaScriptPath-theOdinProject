//DOM Declaration ===================================>

const searchTask = document.querySelector(".search-task");
const addTaskButton = document.querySelector(".add-button");
const outputContainer = document.querySelector(".output-section");
//input-section====================================================>

const myProjectListArray = [];

//localStorage  Initialization ==============================>

let myTaskListArray = getItemFromLocalStorage();

function getItemFromLocalStorage() {
  const key = localStorage.getItem("todo") || "[]";
  return JSON.parse(key);
}

function setMyTaskListArray(items) {
  const myTaskJSON = JSON.stringify(items);

  localStorage.setItem("todo", myTaskJSON);
}

console.log(myTaskListArray);

//Class Declaration ====================================>

class CreateTask {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.id = Date.now();
    this.priority = priority;
  }
  getCreateTask() {
    return `Title: ${this.title}, Description: ${this.description}, Id: ${this.id}, Due-date: ${this.dueDate}, Priority: ${this.priority}`;
  }
}

class CreateProject {
  constructor(project) {
    this.project = project;
    this.id = Date.now();
  }

  getCreateProject() {
    return `Project: ${this.project}, Id: ${this.id}`;
  }
}

// Initialize Class =========================================>

const myNewProject = new CreateProject("ProjectName");
console.log(myNewProject);

//UI ==================================================>
const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input");
const dateInput = document.querySelector(".date-input");
const priorityInput = document.querySelector(".priority-input");
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");

saveButton.addEventListener("click", handleSubmit);
cancelButton.addEventListener("click", cancelSubmit);

//Create new Task ========================================>
function handleSubmit(e) {
  e.preventDefault();
  //get value
  const titleSave = titleInput.value.trim();
  const descriptionSave = descriptionInput.value.trim();
  const dateSave = dateInput.value;
  const prioritySave = priorityInput.value;

  if (!titleSave || !descriptionSave || !dateSave || !prioritySave) {
    alert("Complete Info");
    return;
  }

  const myNewTask = new CreateTask(
    titleSave,
    descriptionSave,
    dateSave,
    prioritySave
  );
  console.log(myNewTask);

  //empty input
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";

  //save to localStorage
  //   setMyTaskListArray(myNewTask);

  //render UI
  renderTaskly(myNewTask);
}

function cancelSubmit() {
  console.log("cancel");
}

//render Taskly ======================>
function renderTaskly(task) {
  const taskItem = document.createElement("div");
  taskItem.innerText = task.title;
  outputContainer.appendChild(taskItem);

  console.log(task);
}
