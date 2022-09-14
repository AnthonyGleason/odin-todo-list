import {Project} from "../scripts/project.js";

function ProjectList(){
    this.projectArray = [];
};

ProjectList.prototype.addProject = function (project, display, projectList, listeners){
    this.pushProject(project);
    this.updateIndexes();
    display.updateProjectButtonContainer(projectList);
    //add remove button event listeners
    listeners.addRemoveProjectListener(project,projectList,display);
}
ProjectList.prototype.pushProject = function (project){
    this.projectArray.push(project);
};
ProjectList.prototype.removeProject = function (index, display, projectList){
    this.projectArray.splice(index, 1);
    this.updateIndexes();
    display.updateProjectButtonContainer(projectList);
};
ProjectList.prototype.updateIndexes = function (){
    let i=0;
    this.projectArray.forEach((project)=>{
        project.index=i;
        i++;
    });
};

export {ProjectList};