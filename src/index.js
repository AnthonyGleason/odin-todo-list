import "./styles/styles.css";
import { Task, Display , Project, ProjectList } from "./scripts/todo.js";

//Create global objects
let DISPLAYCONTROLLER=new Display();
let DEFAULTLIST = new ProjectList();
let DEFAULTPROJECT = new Project("Default Project", true, DEFAULTLIST.projectArray.length);
let DEFAULTTASK = new Task("Default Task", "Default Task Description", "09/22/22", DEFAULTPROJECT.taskArray.length);

//Things to run on first load of the webpage
DISPLAYCONTROLLER.init();

//working within project object... add functionality to add and remove tasks 