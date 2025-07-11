//DOM Declaration ===================================>

const searchTask = document.querySelector(".search-task");
const addTaskButton = document.querySelector(".add-button");
const outputContainer = document.querySelector(".output-section");
//input-section====================================================>
const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input");
const dateInput = document.querySelector(".date-input");
const priorityInput = document.querySelector(".priority-input");
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");

//Initialization =========================================>
const myTaskListArray = [];
const myProjectListArray = [];

//Class Declaration ====================================>

class CreateTask {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.id = Date.now();
    this.priority = false;
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

const myNewTask = new CreateTask("Hello", "Des", "");
console.log(myNewTask);

const myNewProject = new CreateProject("ProjectName");
console.log(myNewProject);

//UI ==================================================>
