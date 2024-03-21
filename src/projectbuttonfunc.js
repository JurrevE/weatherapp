import allprojects from "./index";
import { Project } from "./projectClass";
import { renderprojects } from "./renderprojects";
import { todobuttonfunc } from "./todobuttonfunc";

export function projectbuttonfunc() {
  let projectbutton = document.getElementById("createprojectbutton");
  projectbutton.addEventListener("click", function () {
    let title = prompt("what is the title of your new project?");
    let project = new Project(title);

    allprojects.push(project);
    console.log(allprojects);

    renderprojects();
  });
}
