import {Project} from "./project.js";
import { Task } from "./task.js";

function Display(){
    this.newProjectButton = document.querySelector('#new-project-button');
    this.newProjectForm = document.querySelector('#new-project-form');
    this.newProjectSubmitButton = document.querySelector('#project-submit-button');
    this.newProjectCancelButton = document.querySelector('#project-cancel-button');
    this.projectItemContainer = document.querySelector('#project-item-container');
    this.newTaskButton = document.querySelector('#new-task-button');
    this.newTaskSubmitButton = document.querySelector('#task-submit-button');
    this.newTaskCancelButton = document.querySelector('#task-cancel-button');
    this.newTaskForm = document.querySelector('#new-task-form');
    this.taskItemContainer = document.querySelector('#task-item-container');
};
Display.prototype.addProject = function(projectDiv){
    this.projectItemContainer.appendChild(projectDiv);
};
Display.prototype.addTask = function(taskDiv){
    this.taskItemContainer.appendChild(taskDiv);
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
Display.prototype.addTaskFormListeners = function (Project){
    this.newTaskButton.addEventListener('click', ()=>{
        this.toggleNewTaskForm();
    });
    this.newTaskSubmitButton.addEventListener('click', ()=>{
        //need to setup task adding
        Project.addTask((new Task()));
    });
    this.newTaskCancelButton.addEventListener('click',()=>{
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
        ProjectList.switchProject(Project.index);
        this.updateTaskDisplay(ProjectList.getCurrentProject());
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
Display.prototype.createTaskItem = function (Task, Project){
    //create the task item div
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task-item');
    //create the task name div
    let taskNameDiv = document.createElement('div');
    taskNameDiv.setAttribute('class', 'task-name')
    taskNameDiv.textContent=[`Task Name: ${Task.taskName}`];
    //create the desc div
    let taskDescDiv = document.createElement('div');
    taskDescDiv.setAttribute('class','task-desc');
    taskDescDiv.textContent=[`Task Description: ${Task.desc}`];
    //create the dueDate div
    let taskDueDateDiv = document.createElement('div');
    taskDueDateDiv.setAttribute('class','task-due-date');
    taskDueDateDiv.textContent=[`Task Due Date: ${Task.dueDate}`];
    //create the priority div
    let taskPriorityDiv = document.createElement('div');
    taskPriorityDiv.setAttribute('class','task-priority');
    //convert the task priority to text
    let taskPriority = Task.getTaskPriority();
    taskPriorityDiv.textContent=[`Task Priority: ${taskPriority}`];
    //create the notes div
    let taskNotesDiv = document.createElement('div');
    taskNotesDiv.setAttribute('class','task-notes');
    taskNotesDiv.textContent=[`Task Notes: ${Task.notes}`];
    //create the button container for the checklist button and remove task button
    let taskButtonContainer = document.createElement('div');
    taskButtonContainer.setAttribute('class', 'task-button-container');
    //create the checklist button
    let taskChecklistButton = document.createElement('button');
    taskChecklistButton.setAttribute('class', 'task-checklist');
    this.initTaskChecklistButtonText(Task, taskChecklistButton);
    taskChecklistButton.addEventListener('click', ()=>{
        this.toggleTaskCompleted(Task, taskChecklistButton);
    });
    //create the remove task button
    let taskRemoveButton = document.createElement('button');
    taskRemoveButton.setAttribute('class', 'task-remove-button');
    taskRemoveButton.textContent="Remove Task";
    taskRemoveButton.addEventListener('click',()=>{
        Project.removeTask(Task.index,this);
    });
    //append child elements to the task button container
    taskButtonContainer.appendChild(taskChecklistButton);
    taskButtonContainer.appendChild(taskRemoveButton);

    //append child elements to taskDiv
    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskDescDiv);
    taskDiv.appendChild(taskDueDateDiv);
    taskDiv.appendChild(taskPriorityDiv);
    taskDiv.appendChild(taskNotesDiv);
    taskDiv.appendChild(taskButtonContainer);
    return taskDiv;
};
Display.prototype.clearProjectDisplay = function (){
    this.projectItemContainer.innerHTML="";
};
Display.prototype.clearTaskDisplay = function (){
    this.taskItemContainer.innerHTML="";
};

Display.prototype.init = function (ProjectList,Project){
    this.addProjectFormListeners(ProjectList);
    this.addTaskFormListeners(Project);
};
Display.prototype.initTaskChecklistButtonText = function(Task, taskChecklistButton){
    if (Task.checklist==true){
        taskChecklistButton.textContent="Completed! :)";
    }else if (Task.checklist==false){
        taskChecklistButton.textContent="Not Completed";
    }
};
Display.prototype.toggleNewProjectForm = function (){
    this.newProjectForm.style.display == 'none' ? this.newProjectForm.style.display = 'block' : this.newProjectForm.style.display = 'none';
};
Display.prototype.toggleTaskCompleted = function (Task, taskChecklistButton){
    if (Task.checklist==false){
        taskChecklistButton.textContent="Completed! :)";
        Task.checklist=true;
    }else if (Task.checklist==true){
        taskChecklistButton.textContent="Not Completed";
        Task.checklist=false
    }
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

Display.prototype.updateTaskDisplay = function (Project){
    this.clearTaskDisplay();
    //filter for high (2) priority update
    let highPriorityTaskArray=Project.taskArray.filter(Task => Task.priority==2)
    highPriorityTaskArray.forEach(Task =>{
        this.addTask(this.createTaskItem(Task, Project));
    });
    //filter for normal (1) priority update
    let normalPriorityTaskArray=Project.taskArray.filter(Task => Task.priority==1)
    normalPriorityTaskArray.forEach(Task =>{
        this.addTask(this.createTaskItem(Task, Project));
    });
    //filter for low (0) priority update
    let lowPriorityTaskArray=Project.taskArray.filter(Task => Task.priority==0)
    lowPriorityTaskArray.forEach(Task =>{
        this.addTask(this.createTaskItem(Task, Project));
    });
};

export {Display};