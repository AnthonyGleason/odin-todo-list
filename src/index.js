import "../src/styles/styles.css";
import {Display } from "./scripts/display.js";
import {Project} from "./scripts/project.js";
import {ProjectList} from "./scripts/projectList.js";
import {Listener} from "./scripts/listeners.js";

//creates a default list for all projects and add the newly created default project to it
let DEFAULTLIST = new ProjectList();
let DEFAULTPROJECT = new Project("default", true);
let DEFAULTDISPLAY = new Display(); 
let DEFAUTLISTENERS = new Listener();

DEFAULTLIST.addProject(DEFAULTPROJECT, DEFAULTDISPLAY, DEFAULTLIST, DEFAUTLISTENERS);

//Adds the event listeners for submit and cancelling new projects
DEFAUTLISTENERS.addProjectFormListeners(DEFAULTDISPLAY, DEFAULTLIST, DEFAUTLISTENERS);