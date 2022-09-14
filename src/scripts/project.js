function Project (projectName, currentProject){
    this.currentProject = currentProject;
    this.index;
    this.projectName = projectName;
    this.taskArray = [];
};

export {Project};