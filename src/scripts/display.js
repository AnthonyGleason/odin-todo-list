import {Project, ProjectList, DEFAULTLIST} from "../scripts/project.js";
import {Task} from "../scripts/task.js";

function Display(){
    this.buttonContainer = document.querySelector(".sidebar-button-container");
    this.addProjectButton = document.querySelector("#add-project-button");
    this.addProjectForm = document.querySelector('.sidebar-project');
    this.cancelProjectButton = document.querySelector('#cancel-button');
    this.submitButton = document.querySelector("#submit-button");
};
Display.prototype.addButtonListeners = function (){
    let allButtons = document.querySelectorAll('.project-item-button');
    allButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            DEFAULTLIST.removeProject(button.getAttribute('index'));
            DEFAULTDISPLAY.clearProjectDisplay();
            DEFAULTDISPLAY.displayProjects();
            console.log(DEFAULTLIST);
        })
    });
};
Display.prototype.clearProjectDisplay = function (){
    let allProjectDivs = document.querySelectorAll(".project-item");
    allProjectDivs.forEach((project)=>{
        project.remove();
    });
};
Display.prototype.displayProjects = function (){
    DEFAULTLIST.projectArray.forEach((project)=>{
        //Create project item div
        let projectDiv=document.createElement('div'); 
        projectDiv.setAttribute('class', 'project-item');
        projectDiv.setAttribute('index', project.index);
        //Create project name div
        let projectTextDiv = document.createElement('div');
        projectTextDiv.setAttribute('class', 'project-text-div');
        projectTextDiv.textContent=project.projectName;
        projectTextDiv.setAttribute('index', project.index);
        let buttonDiv=document.createElement('button');
        buttonDiv.textContent='X';
        buttonDiv.setAttribute('class', 'project-item-button');
        buttonDiv.setAttribute('index', project.index);
        //Append newly created elements
        projectDiv.appendChild(projectTextDiv);
        projectDiv.appendChild(buttonDiv);
        this.buttonContainer.appendChild(projectDiv);
    });
};
Display.prototype.displayTasks = function (){

};
Display.prototype.toggleForm = function (){
    this.addProjectForm.style.display=='none' ? this.addProjectForm.style.display='block' : this.addProjectForm.style.display='none';
};

let DEFAULTDISPLAY = new Display();

export {DEFAULTDISPLAY};