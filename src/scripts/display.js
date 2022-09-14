function Display(){
    this.projectButtonContainer = document.querySelector(".button-container");
};

//up to here

//clears the button container of all project items
Display.prototype.clearButtonContainer = function (){
   this.projectButtonContainer.innerHTML='';
};
Display.prototype.createProjectDiv = function (project){
    //Create the project container
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-item');
    projectDiv.setAttribute('index',project.index);
    //Create the project name text div
    let projectText = document.createElement('div');
    projectText.setAttribute('class', 'project-item-text')
    projectText.setAttribute('index',project.index);
    projectText.textContent=project.projectName;
    projectDiv.appendChild(projectText);
    //Create the X button to remove projects
    let projectCancelButton = document.createElement('button');
    projectCancelButton.setAttribute('class', 'project-remove-button');
    projectCancelButton.setAttribute('index',project.index);
    projectCancelButton.textContent="X";
    projectDiv.appendChild(projectCancelButton);
    return projectDiv;
};

//updates the button container with all project items from the ProjectList Array
Display.prototype.updateProjectButtonContainer = function (projectList){
    this.clearButtonContainer();
    projectList.projectArray.forEach((project) => {
        let projectDiv = this.createProjectDiv(project);
        this.projectButtonContainer.appendChild(projectDiv);
    });
};

export {Display};