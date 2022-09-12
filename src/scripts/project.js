function Project(index,name,currentProject){
    this.taskArray=[];
    this.index=index;
    this.name=name;
    this.currentProject=currentProject;
};
Project.prototype.addTask = function (task){
    this.taskArray.push(task);
};
Project.prototype.removeTask = function (task){
    this.taskArray.splice(task.index, 1);
};
Project.switchCurrentProject = function (newProject){
    this.currentProject=false;
    newProject.currentProject=true;
};
Project.prototype.updateTaskIndexes = function (){
    let i=0;
    this.taskArray.forEach((task)=>{
        task.index=i;
        i++;
    });
};

function ProjectList (){
    this.projectArray=[];
};
ProjectList.prototype.addProject = function (project){
    this.projectArray.push(project);
};
ProjectList.prototype.getCurrentProject = function (){
    return this.projectArray.filter((project)=>{
       return (project.currentProject==true ? true : false);
    });
};
ProjectList.prototype.removeProject = function (project){
    this.projectArray.splice(project.index, 1);
};
ProjectList.prototype.updateProjectIndexes = function (){
    let i=0;
    this.projectArray.forEach((project)=>{
        project.index=i;
        i++;
    });
};

//Creates the global default project list
let DEFAULTLIST = new ProjectList();

//Creates the default project and sets it as current project
let DEFAULTPROJECT = new Project(DEFAULTLIST.projectArray.length,"default",true);
DEFAULTLIST.addProject(DEFAULTPROJECT);
console.log(DEFAULTLIST);

export {Project, ProjectList,DEFAULTLIST};