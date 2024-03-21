import { Todo } from "./todoClass";
import allprojects from "./index";
import { renderprojects } from "./renderprojects";

export function todobuttonfunc() {
  // Remove existing event listeners from "addTodo" buttons
  document
    .getElementById("projectcontainer")
    .removeEventListener("click", handleAddTodoClick);

  // Add event listener to "addTodo" buttons
  document
    .getElementById("projectcontainer")
    .addEventListener("click", handleAddTodoClick);
}

function handleAddTodoClick(event) {
  if (event.target.classList.contains("add-todo-button")) {
    let projectcontainer = document.getElementById("projectcontainer");
    let button = event.target;
    let value = parseInt(button.getAttribute("data-project-index"));
    let title = prompt("What is the title of your new todo?");
    let description = prompt("What is the description of your new todo?");
    let duedate = prompt("What is the due date of your new todo?");
    let priority = prompt("What is the priority of your new todo?");
    let notes = prompt("What are the notes for your new todo?");

    let todo = new Todo(title, description, duedate, priority, notes);
    console.log(todo);

    let correctproject = allprojects[value];
    correctproject.todos.push(todo);
    console.log(correctproject);

    // Clear the project container before appending todos
    projectcontainer.innerHTML = "";

    // Iterate over all todos and create a div for each one
    correctproject.todos.forEach((todo) => {
      let tododiv = document.createElement("div");
      tododiv.textContent = todo.title; // Assuming 'title' is a property of the todo object
      projectcontainer.append(tododiv);
    });

    // Render projects after updating todos
    renderprojects();
  }
}
