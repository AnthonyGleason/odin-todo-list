import "./styles/styles.css";
import { renderInitSite } from "./scripts/renderInitSite.js";
import { Task, Display , Project, ProjectList } from "./scripts/todo.js";

//Generate HTML on first load of the webpage
renderInitSite();

//Create global objects
let DISPLAYCONTROLLER=new Display();
let DEFAULTLIST = new ProjectList();
let DEFAULTPROJECT = new Project("Default Project", true, DEFAULTLIST.projectArray.length);
let DEFAULTTASK = new Task("Default Task", "Default Task Description", "2022-09-07", DEFAULTPROJECT.taskArray.length);

//Init Display Controller
DISPLAYCONTROLLER.init(DEFAULTLIST);

//Load local storage, check to see if the local storage is empty. If it is empty load the default project and default task
if (JSON.parse(localStorage.getItem("projectArray"))==null){
    //Display default project with default task
    DEFAULTPROJECT.addTask(DEFAULTTASK);
    DEFAULTLIST.addProject(DEFAULTPROJECT);
    DISPLAYCONTROLLER.updateProjectDisplay(DEFAULTLIST);
    DISPLAYCONTROLLER.updateTaskDisplay(DEFAULTLIST);
} else{
    DEFAULTLIST.projectArray=JSON.parse(localStorage.getItem("projectArray"));
    DISPLAYCONTROLLER.updateProjectDisplay(DEFAULTLIST);
    //Check to see if a current project exists and if it does update the task display
    if (DEFAULTLIST.getCurrentProject()!=null){
        DISPLAYCONTROLLER.updateTaskDisplay(DEFAULTLIST);
    };
};
