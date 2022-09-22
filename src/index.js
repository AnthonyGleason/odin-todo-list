import "./styles/styles.css";
import { Task, Display , Project, ProjectList } from "./scripts/todo.js";

//Create global objects
let DISPLAYCONTROLLER=new Display();
let DEFAULTLIST = new ProjectList();
let DEFAULTPROJECT = new Project("Default Project", true, DEFAULTLIST.projectArray.length);
let DEFAULTTASK = new Task("Default Task", "Default Task Description", "2022-09-07", DEFAULTPROJECT.taskArray.length);

//Things to run on first load of the webpage
DISPLAYCONTROLLER.init(DEFAULTLIST);

//Display default project with default task
DEFAULTPROJECT.addTask(DEFAULTTASK);
DEFAULTLIST.addProject(DEFAULTPROJECT);
DISPLAYCONTROLLER.updateTaskDisplay(DEFAULTLIST);
DISPLAYCONTROLLER.updateProjectDisplay(DEFAULTLIST);