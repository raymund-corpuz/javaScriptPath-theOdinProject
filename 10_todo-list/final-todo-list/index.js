//DOM Declaration ===================================>

const searchTask = document.querySelector(".search-task");
const addTaskButton = document.querySelector(".add-button");
const outputContainer = document.querySelector(".output-section");
const modalClose = document.querySelector(".modal-close");

function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("is-active");
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-active");
}

addTaskButton.addEventListener("click", openModal);

modalClose.addEventListener("click", closeModal);
//input-section====================================================>

const myProjectListArray = [];

//localStorage  Initialization ==============================>

let myArray = getItemFromLocalStorage();

function getItemFromLocalStorage() {
  const key = localStorage.getItem("todo") || "[]";
  const value = JSON.parse(key);
  const newValue = [...value];
  newValue.forEach((item) => {
    renderTaskly(item);
  });
  return newValue;
}

function setMyTaskListArray(items) {
  myArray.push(items);
  localStorage.setItem("todo", JSON.stringify(myArray));
}

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

//UI ==================================================>
const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input");
const dateInput = document.querySelector(".date-input");
const priorityInput = document.querySelector(".priority-input");
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");

saveButton.addEventListener("click", handleSubmit);
cancelButton.addEventListener("click", closeModal);

//Create new Task ========================================>
function handleSubmit(e) {
  e.preventDefault();
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

  //empty input
  titleInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";

  //function

  setMyTaskListArray(myNewTask);
  renderTaskly(myNewTask);
  closeModal();
}

//render Taskly ======================>
function renderTaskly(task) {
  const taskItem = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const deleteButton = document.createElement("button");

  title.innerText = `Title: ${task.title}`;
  description.innerText = `Description: ${task.description}`;
  dueDate.innerText = `Due date: ${task.dueDate}`;
  priority.innerText = `Priority: ${task.priority}`;
  deleteButton.innerText = "delete";

  taskItem.classList.add("list-item");

  outputContainer.appendChild(taskItem);
  taskItem.appendChild(title);
  taskItem.appendChild(description);
  taskItem.appendChild(dueDate);
  taskItem.appendChild(priority);
  taskItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => handleDelete(task.id));
}

function handleDelete(task) {
  myArray = myArray.filter((item) => item.id !== task);
  console.log(myArray);
  return myArray;
}
