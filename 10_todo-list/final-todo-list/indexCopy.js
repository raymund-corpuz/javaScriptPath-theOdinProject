let todoListArray = getFromLocalStorage();

function getFromLocalStorage() {
  try {
    const raw = localStorage.getItem("todo") || "[]";
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
}

function setFromLocalStorage(task) {
  localStorage.setItem("todo", JSON.stringify(task));
}

const todoObject = {
  title: "The Odin Project",
  description: "This is awesome",
  dueDate: "June 12, 2025",
  id: "001",
  priority: "Top Priority",
  delete: true,
};

const todoObject2 = {
  title: "The Odin Project 2",
  description: "This is awesome",
  dueDate: "June 12, 2025",
  id: "002",
  priority: "Top Priority",
  delete: true,
};

function openModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("is-active");
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-active");
}

function addTask(task) {
  todoListArray.push(task);
  console.log(todoListArray);
  setFromLocalStorage(todoListArray);
  renderTask(todoListArray);
}

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", openModal);

function renderTask(todoListArray) {
  const outputContainer = document.querySelector(".output-section");
  outputContainer.innerHTML = "";

  todoListArray.forEach((value) => {
    renderUI(value);
  });
}

function removeTask(task) {
  todoListArray = todoListArray.filter((todo) => +todo.id !== +task);
  return todoListArray;
}

function renderUI(task) {
  const outputContainer = document.querySelector(".output-section");
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

  taskItem.appendChild(title);
  taskItem.appendChild(description);
  taskItem.appendChild(dueDate);
  taskItem.appendChild(priority);
  taskItem.appendChild(deleteButton);
  outputContainer.appendChild(taskItem);
}

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

  const myTask = {
    title: titleSave,
    description: descriptionSave,
    dueDate: dateSave,
    id: Date.now(),
    priority: prioritySave,
  };

  addTask(myTask);
  closeModal();

  //shortcut
  [titleInput, descriptionInput, dateInput, priorityInput].forEach(
    (input) => (input.value = "")
  );
}

renderTask();
