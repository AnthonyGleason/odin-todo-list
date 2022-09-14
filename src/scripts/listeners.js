import {Project} from "./project.js";
function Listener(){
};
Listener.prototype.addRemoveProjectListener = function (projectList, display){
    let projectRemoveButton = project.querySelector('.project-remove-button');
    projectRemoveButton.addEventListener('click', ()=>{
        projectList.removeProject(button.getAttribute('index'), display, projectList);
    });
};
Listener.prototype.addProjectFormListeners = function (display, projectList, listener){
    display.projectSubmitButton.addEventListener('click', ()=>{
        projectList.addProject(new Project(projectName.value, false), display, projectList, listener);
    });
    display.newProjectButton.addEventListener('click', ()=>{
        display.toggleNewProjectForm();
    });
    display.projectCancelButton.addEventListener('click', ()=>{
        
    });
};

export {Listener};