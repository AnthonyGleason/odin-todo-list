import {Project} from "./project.js";

function Display(){
    this.newProjectButton = document.querySelector('#new-project-button');
    this.newProjectForm = document.querySelector('#new-project-form');
    this.newProjectSubmitButton = document.querySelector('#submit-button');
    this.newProjectCancelButton = document.querySelector('#cancel-button');
    this.projectItemContainer = document.querySelector('#project-item-container');
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
Display.prototype.createProjectItem = function (Project, ProjectList){
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-item');
    projectDiv.setAttribute('index',Project.index);
    //Create the project name text div
    let projectText = document.createElement('div');
    projectText.setAttribute('class', 'project-item-text')
    projectText.setAttribute('index',Project.index);
    projectText.textContent=Project.projectName;
    projectDiv.appendChild(projectText);
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
};

Display.prototype.toggleNewProjectForm = function (){
    this.newProjectForm.style.display == 'none' ? this.newProjectForm.style.display = 'block' : this.newProjectForm.style.display = 'none';
};
Display.prototype.updateProjectDisplay = function (ProjectList){
    this.clearProjectDisplay();
    ProjectList.projectArray.forEach(Project => {
        this.addProject(this.createProjectItem(Project, ProjectList));
    });
};

export {Display};