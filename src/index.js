import "../src/styles/styles.css";
import {DEFAULTLIST,Project,ProjectList} from "../src/scripts/project.js";
import {Task} from "../src/scripts/task.js";
import {DEFAULTDISPLAY} from "../src/scripts/display.js";

DEFAULTDISPLAY.submitButton.addEventListener('click', ()=>{
    let tempProject = new Project(DEFAULTLIST.projectArray.length,projectName.value,false);
    DEFAULTLIST.addProject(tempProject);
    DEFAULTDISPLAY.clearProjectDisplay();
    DEFAULTDISPLAY.displayProjects();
    DEFAULTDISPLAY.addButtonListeners();
});
DEFAULTDISPLAY.addProjectButton.addEventListener('click', ()=>{
    DEFAULTDISPLAY.toggleForm();
});
DEFAULTDISPLAY.cancelProjectButton.addEventListener('click', ()=>{
    DEFAULTDISPLAY.toggleForm();
})