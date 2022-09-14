function Listener(){
    this.allProjectRemoveButtons;
};
Listener.prototype.addRemoveProjectListeners = function (projectList, display){
    this.allProjectRemoveButtons = document.querySelectorAll('.project-remove-button');
    this.allProjectRemoveButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            projectList.removeProject(button.getAttribute('index'), display, projectList);
        });
    });
};

export {Listener};