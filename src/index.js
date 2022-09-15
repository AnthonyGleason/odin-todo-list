import "./styles/styles.css";
import { ProjectList, Project } from "./scripts/project.js";
import { Display } from "./scripts/display.js";

let DEFAULTLIST = new ProjectList();
let DEFAULTDISPLAY = new Display();
let DEFAULTPROJECT = new Project("default", true);

DEFAULTDISPLAY.init(DEFAULTLIST);
DEFAULTLIST.addProject(DEFAULTPROJECT, DEFAULTDISPLAY);
