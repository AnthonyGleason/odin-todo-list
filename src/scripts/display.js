import {Project} from "./project.js";

function Display(){
    this.newProjectButton = document.querySelector('#new-project-button');
    this.newProjectForm = document.querySelector('#new-project-form');
    this.newProjectSubmitButton = document.querySelector('#submit-button');
    this.newProjectCancelButton = document.querySelector('#cancel-button');
    this.projectItemContainer = document.querySelector('#project-item-container');
    this.newTaskButton = document.querySelector('#new-task-button');
    this.newTaskForm = document.querySelector('#new-task-form');
};
Display.prototype.addProject = function(projectDiv){
    this.projectItemContainer.appendChild(projectDiv);
};

Display.prototype.addProjectFormListeners = function (ProjectList){
    this.newProjectButton.addEventListener('click', ()=>{
        this.toggleNewProjectForm();
    });
    this.newProjectSubmitButton.addEventListener('click', ()=>{
        ProjectList.addProject((new Project(projectName.value,false)),this);
    });
    this.newProjectCancelButton.addEventListener('click', ()=>{
        this.toggleNewProjectForm();
    });
};
Display.prototype.addTaskFormListeners = function (){
    this.newTaskButton.addEventListener('click', ()=>{
        this.toggleNewTaskForm();
    });
}
Display.prototype.createProjectItem = function (Project, ProjectList){
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-item');
    projectDiv.setAttribute('index',Project.index);
    //Create the project name button
    let currentProjectButton = document.createElement('button');
    currentProjectButton.setAttribute('class', 'project-item-button')
    currentProjectButton.setAttribute('index',Project.index);
    currentProjectButton.textContent=Project.projectName;
    currentProjectButton.addEventListener('click', ()=>{
        console.log(ProjectList.getCurrentProject());
        ProjectList.switchProject(Project.index);
        console.log(ProjectList.getCurrentProject());
    });
    projectDiv.appendChild(currentProjectButton);
    //Create the X button to remove projects
    let projectCancelButton = document.createElement('button');
    projectCancelButton.setAttribute('class', 'project-remove-button');
    projectCancelButton.setAttribute('index',Project.index);
    projectCancelButton.textContent="X";
    projectCancelButton.addEventListener('click', ()=>{
        ProjectList.removeProject(projectCancelButton.getAttribute('index'), this);
    });
    projectDiv.appendChild(projectCancelButton);

    return projectDiv;
};
Display.prototype.clearProjectDisplay = function (){
    this.projectItemContainer.innerHTML="";
};
Display.prototype.init = function (ProjectList){
    this.addProjectFormListeners(ProjectList);
    this.addTaskFormListeners();
};

Display.prototype.toggleNewProjectForm = function (){
    this.newProjectForm.style.display == 'none' ? this.newProjectForm.style.display = 'block' : this.newProjectForm.style.display = 'none';
};
Display.prototype.toggleNewTaskForm = function (){
    this.newTaskForm.style.display == 'none' ? this.newTaskForm.style.display = 'block' : this.newTaskForm.style.display = 'none';
};

Display.prototype.updateProjectDisplay = function (ProjectList){
    this.clearProjectDisplay();
    ProjectList.projectArray.forEach(Project => {
        this.addProject(this.createProjectItem(Project, ProjectList));
    });
};

export {Display};