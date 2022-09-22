//Task Object
let Task = function(taskName,taskDesc,taskDueDate,index){
    this.taskName=taskName;
    this.taskDesc=taskDesc;
    this.taskDueDate=taskDueDate;
    this.index=index;
};
//Project Object
let Project = function (projectName,isCurrentProject,index){
    this.projectName=projectName;
    this.isCurrentProject=isCurrentProject;
    this.index=index;
    this.taskArray=[];
}
Project.prototype.addTask = function(Task){
    Task.index=this.taskArray.length;
    this.taskArray.push(Task);
};
Project.prototype.removeTask = function(taskIndex){
    this.taskArray.splice(taskIndex, 1);
    this.updateTaskIndexes();
};
Project.prototype.updateTaskIndexes = function(){
    let i=0;
    this.taskArray.forEach((Task)=>{
        Task.index=i;
        i++;
    });
};

//Project List Object
let ProjectList = function (){
    this.projectArray = [];
};
ProjectList.prototype.addProject = function(Project){
    Project.index=this.projectArray.length;
    this.projectArray.push(Project);
};
ProjectList.prototype.getCurrentProject = function(){
    let currentProject;
    this.projectArray.forEach((Project)=>{
        Project.isCurrentProject==true ? currentProject=Project : null;
    });
    return currentProject;
};
ProjectList.prototype.removeProject = function(projectIndex){
    this.projectArray.splice(projectIndex, 1);
    this.updateProjectIndexes();
};
ProjectList.prototype.switchCurrentProject = function(newProjectIndex){
    this.getCurrentProject().isCurrentProject=false;
    this.projectArray[newProjectIndex].isCurrentProject=true;
};
ProjectList.prototype.updateProjectIndexes = function(){
    let i=0;
    this.projectArray.forEach((Project)=>{
        Project.index=i;
        i++;
    });
};

//Display Object
let Display = function(){
    //sidebar project item container
    this.projectItemContainer = document.querySelector('.project-item-container')
    //content task item container
    this.taskItemContainer = document.querySelector('.task-item-container');
    //sidebar new project form buttons
    this.cancelNewProjectButton=document.querySelector('#project-cancel-button');
    this.submitNewProjectButton=document.querySelector('#project-submit-button');
    this.newProjectButton=document.querySelector('.new-project-button');
    this.newProjectForm = document.querySelector('#new-project-form');
    //content new task form buttons
    this.cancelNewTaskButton=document.querySelector('#task-cancel-button');
    this.submitNewTaskButton=document.querySelector('#task-submit-button');
    this.newTaskButton=document.querySelector('.new-task-button');
    this.newTaskForm=document.querySelector('#new-task-form');
};

Display.prototype.init = function(ProjectList){
    this.addEventListeners(ProjectList);
};

Display.prototype.addEventListeners = function(ProjectList){

    //sidebar new project listeners
    this.cancelNewProjectButton.addEventListener('click',()=>{
        this.toggleNewProjectForm();
        this.newProjectButton.style.display='block';
    });
    this.submitNewProjectButton.addEventListener('click',()=>{
        ProjectList.addProject(new Project(projectName.value,false,ProjectList.projectArray.length));
        this.updateProjectDisplay(ProjectList);
    });
    this.newProjectButton.addEventListener('click',()=>{
        this.toggleNewProjectForm();
        this.newProjectButton.style.display='none';
    });

    //content new task listeners
    this.cancelNewTaskButton.addEventListener('click',()=>{
        this.toggleNewTaskForm();
        this.newTaskButton.style.display='block';
    });
    this.submitNewTaskButton.addEventListener('click',()=>{
        
    });
    this.newTaskButton.addEventListener('click',()=>{
        this.toggleNewTaskForm();
        this.newTaskButton.style.display='none';
    });
};
Display.prototype.clearProjectContainer = function(){
    this.projectItemContainer.innerHTML="";
};
Display.prototype.clearTaskContainer = function (){
    this.taskItemContainer.innerHTML="";
};

Display.prototype.renderProjectItem = function(Project,ProjectList){
    //Create project item
    let projectItemDiv = document.createElement('div');
    projectItemDiv.setAttribute('class', 'project-item');
    //Create the project name div
    let projectNameDiv = document.createElement('div');
    projectNameDiv.setAttribute('class', 'project-name');
    projectNameDiv.textContent=Project.projectName;
    //Create the remove project button
    let projectRemoveButton = document.createElement('button');
    projectRemoveButton.setAttribute('class', 'project-remove-button');
    projectRemoveButton.textContent='Remove Project';
    projectRemoveButton.addEventListener('click', ()=>{
        //remove the project from the project list array based on the index
        ProjectList.removeProject(Project.index);
        //update the project display
        this.updateProjectDisplay(ProjectList);
    });
    //Append elements to project item
    projectItemDiv.appendChild(projectNameDiv);
    projectItemDiv.appendChild(projectRemoveButton);
    //Append project item to project container
    this.projectItemContainer.appendChild(projectItemDiv);
};
Display.prototype.renderTaskItem = function (Task, Project, ProjectList){
    //Create task item
    let taskItemDiv = document.createElement('div');
    taskItemDiv.setAttribute('class', 'task-item');
    //Create the task name div
    let taskNameDiv = document.createElement('div');
    taskNameDiv.setAttribute('class', 'task-name');
    taskNameDiv.textContent=Task.taskName;
    //Create the task desc div
    let taskDescDiv = document.createElement('div');
    taskDescDiv.setAttribute('class', 'task-desc');
    taskDescDiv.textContent=Task.taskDesc;
    //Create the task due date div
    let taskDueDate = document.createElement('div');
    taskDueDate.setAttribute('class', 'task-due-date');
    taskDueDate.textContent=Task.taskDueDate;
    //Create the task update button
    let taskUpdateButton = document.createElement('button');
    taskUpdateButton.setAttribute('class', 'task-update-button');
    taskUpdateButton.textContent="Update Task";
    taskUpdateButton.addEventListener('click', ()=>{

    });
    //Create the task remove button
    let taskRemoveButton = document.createElement('button');
    taskRemoveButton.setAttribute('class', 'task-remove-button');
    taskRemoveButton.textContent="Remove Task";
    taskRemoveButton.addEventListener('click',()=>{
        //remove the task from the task array based on the index
        Project.removeTask(Task.index);
        //update the task display
        this.updateTaskDisplay(ProjectList);
    });
    //Append elements to task item
    taskItemDiv.appendChild(taskNameDiv);
    taskItemDiv.appendChild(taskDescDiv);
    taskItemDiv.appendChild(taskDueDate);
    taskItemDiv.appendChild(taskUpdateButton);
    taskItemDiv.appendChild(taskRemoveButton);
    //Append task item to task container
    this.taskItemContainer.appendChild(taskItemDiv);
};
Display.prototype.toggleNewProjectForm = function(){
    this.newProjectForm.style.display == 'none' ? this.newProjectForm.style.display = 'flex' : this.newProjectForm.style.display = 'none';
};
Display.prototype.toggleNewTaskForm = function(){
    this.newTaskForm.style.display == 'none' ? this.newTaskForm.style.display = 'flex' : this.newTaskForm.style.display = 'none';
};
Display.prototype.updateProjectDisplay = function(ProjectList){
    this.clearProjectContainer();
    ProjectList.projectArray.forEach((Project)=>{
        this.renderProjectItem(Project, ProjectList);
    });
};
Display.prototype.updateTaskDisplay = function(ProjectList){
    this.clearTaskContainer();
    ProjectList.getCurrentProject().taskArray.forEach((Task)=>{
        this.renderTaskItem(Task, ProjectList.getCurrentProject(), ProjectList);
    });
};
//Export Objects
export {Task , Display , Project, ProjectList};