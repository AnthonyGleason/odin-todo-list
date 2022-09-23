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

//Display default project with default task
DEFAULTPROJECT.addTask(DEFAULTTASK);
DEFAULTLIST.addProject(DEFAULTPROJECT);
DISPLAYCONTROLLER.updateTaskDisplay(DEFAULTLIST);
DISPLAYCONTROLLER.updateProjectDisplay(DEFAULTLIST);