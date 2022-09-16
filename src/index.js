import "./styles/styles.css";
import { ProjectList, Project } from "./scripts/project.js";
import { Display } from "./scripts/display.js";

let DEFAULTLIST = new ProjectList();
let DEFAULTDISPLAY = new Display();
let DEFAULTPROJECT = new Project("default", true);

DEFAULTDISPLAY.init(DEFAULTLIST);
DEFAULTLIST.addProject(DEFAULTPROJECT, DEFAULTDISPLAY);



//switch the text section of creating new projects to be buttons, the event listener for click should run switch project and send the index of the button over to switchProject()

//after that use css to style the current Project.
//maybe add something to highlight the current Project when update display is called that would mean calling update display within the switch project function.

//bug warning if all projects are deleted no project will be set as the current project