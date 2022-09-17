import { Display } from "./display";

function Project(projectName, isCurrentProject){
    this.isCurrentProject = isCurrentProject;
    this.index;
    this.projectName = projectName;
    this.taskArray = [];
};
Project.prototype.addTask = function (Task, Display){
    //index the task
    Task.index = this.taskArray.length;
    //push the task to the array
    this.pushToArray(Task);
    //refresh the display
    Display.updateTaskDisplay(this);
};

Project.prototype.pushToArray = function (Task){
    this.taskArray.push(Task);
};

Project.prototype.removeTask = function (index,Display){
    this.taskArray.splice(index,1);
    //update indexes
    this.updateIndexes();
    //refresh display
    Display.updateTaskDisplay(this);
    
};
Project.prototype.updateIndexes = function (){
    let i=0;
    this.taskArray.forEach((task)=>{
        task.index=i;
        i++;
    });
};

function ProjectList(){
    this.projectArray = [];
};

ProjectList.prototype.addProject = function (Project, Display){
    //index the project
    Project.index=this.projectArray.length;
    //push the project to the array
    this.pushToArray(Project);
    //refresh the display
    Display.updateProjectDisplay(this);
};
ProjectList.prototype.getCurrentProject = function (){
    let currentProject;
    this.projectArray.forEach((Project)=>{
        Project.isCurrentProject==true ? currentProject=Project : null;
    });
    return currentProject;
};
ProjectList.prototype.pushToArray = function (Project){
    this.projectArray.push(Project);
};
ProjectList.prototype.removeProject = function (index, Display){
    this.projectArray.splice(index,1);
    //update indexes
    this.updateIndexes();
    //refresh the display
    Display.updateProjectDisplay(this);
};
ProjectList.prototype.switchProject = function (newProjectIndex){
    this.getCurrentProject().isCurrentProject=false;
    this.projectArray[newProjectIndex].isCurrentProject=true;
};
ProjectList.prototype.updateIndexes = function (){
    let i=0;
    this.projectArray.forEach((project)=>{
        project.index=i;
        i++;
    });
};
export {Project, ProjectList};