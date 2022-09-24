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


//Load local storage || add items from the local storage to the array using new and the projectlist addproject functionality
let tempArray=JSON.parse(localStorage.getItem("projectArray"))
tempArray.forEach((item)=>{
    //create the project based on local storage
    let newProject=new Project(item.projectName,item.isCurrentProject,item.index);
    //get all tasks from the local storage
    item.taskArray.forEach((taskItem)=>{
        newProject.addTask(new Task(taskItem.taskName,taskItem.taskDesc,taskItem.taskDueDate,taskItem.index), DEFAULTLIST);
    });
    //add the projects back to the default list
    DEFAULTLIST.addProject(newProject);
});

//update project display
DISPLAYCONTROLLER.updateProjectDisplay(DEFAULTLIST);

//if there is no current project do not output any tasks to the task display
if (DEFAULTLIST.getCurrentProject()!=undefined){
    DISPLAYCONTROLLER.updateTaskDisplay(DEFAULTLIST);
}
