function Project(projectName, isCurrentProject){
    this.isCurrentProject = isCurrentProject;
    this.index;
    this.projectName = projectName;
    this.taskArray = [];
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

ProjectList.prototype.updateIndexes = function (){
    let i=0;
    this.projectArray.forEach((project)=>{
        project.index=i;
        i++;
    });
};
export {Project, ProjectList};