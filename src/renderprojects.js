import allprojects from "./index";
import { todobuttonfunc } from "./todobuttonfunc";

export function renderprojects() {
  const projectContainer = document.getElementById("projectcontainer");
  projectContainer.innerHTML = "";

  allprojects.forEach(function (project, index) {
    let projectdiv = document.createElement("div");

    // Append project title to the project div
    let projectTitle = document.createElement("div");
    projectTitle.innerText = "project: " + project.title;
    projectdiv.setAttribute("id", "projectdiv");
    projectdiv.appendChild(projectTitle);

    let removebutton = document.createElement("button");
    removebutton.innerText = "remove project";
    removebutton.classList.add("remove-button");
    removebutton.setAttribute("data-project-index", index);

    removebutton.addEventListener("click", function () {
      allprojects.splice(index, 1);
      console.log(allprojects);
      renderprojects();
    });

    let addtodobutton = document.createElement("button");
    addtodobutton.innerText = "add Todo";
    addtodobutton.classList.add("add-todo-button");
    addtodobutton.setAttribute("data-project-index", index);

    addtodobutton.addEventListener("click", function () {
      console.log("Add Todo clicked for project index:", index);
      todobuttonfunc();
    });

    // Append buttons to the project div
    projectdiv.appendChild(removebutton);
    projectdiv.appendChild(addtodobutton);

    // Append todos to the project div
    project.todos.forEach((todo, todoIndex) => {
      let tododiv = document.createElement("div");
      tododiv.setAttribute("class", "todo");

      // Create checkbox
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      // Create title element
      let title = document.createElement("span");
      title.textContent = "title: " + todo.title;

      // Append checkbox, title, and other details to tododiv
      tododiv.appendChild(checkbox);
      tododiv.appendChild(title);

      let description = document.createElement("div");
      description.textContent = " description: " + todo.description + " ";
      tododiv.appendChild(description);

      let duedate = document.createElement("div");
      duedate.textContent = " due date: " + todo.dueDate + " ";
      tododiv.appendChild(duedate);

      let priority = document.createElement("div");
      priority.textContent = " priority: " + todo.priority + " ";
      tododiv.appendChild(priority);

      let notes = document.createElement("div");
      notes.textContent = " notes: " + todo.notes;
      tododiv.appendChild(notes);

      let deletetodobutton = document.createElement("button");
      deletetodobutton.innerHTML = "Delete todo";
      deletetodobutton.setAttribute("data-project-index", index);
      deletetodobutton.setAttribute("data-todo-index", todoIndex);
      tododiv.appendChild(deletetodobutton);
      deletetodobutton.addEventListener("click", function () {
        project.todos.splice(todoIndex, 1);
        console.log(project.todos);
        renderprojects();
      });

      // Append tododiv to projectdiv
      projectdiv.appendChild(tododiv);
    });

    // Append the project div to the container
    projectContainer.appendChild(projectdiv);
  });
}
