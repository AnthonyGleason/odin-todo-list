let Task = function(taskName,taskDesc,taskDueDate,index){
    this.taskName=taskName;
    this.taskDesc=taskDesc;
    this.taskDueDate=taskDueDate;
    this.index=index;
};

let Project = function (projectName,isCurrentProject,index){
    this.projectName=projectName;
    this.isCurrentProject=isCurrentProject;
    this.index=index;
    this.taskArray=[];
}

let ProjectList = function (){
    this.projectArray = [];
};

let Display = function(){
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

Display.prototype.init = function(){
    this.addEventListeners();
};

Display.prototype.addEventListeners = function(){
    //sidebar new project listeners
    this.cancelNewProjectButton.addEventListener('click',()=>{
        this.toggleNewProjectForm();
        this.newProjectButton.style.display='block';
    });
    this.submitNewProjectButton.addEventListener('click',()=>{
        return 0;
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

Display.prototype.toggleNewProjectForm = function(){
    this.newProjectForm.style.display == 'none' ? this.newProjectForm.style.display = 'flex' : this.newProjectForm.style.display = 'none';
};

Display.prototype.toggleNewTaskForm = function(){
    this.newTaskForm.style.display == 'none' ? this.newTaskForm.style.display = 'flex' : this.newTaskForm.style.display = 'none';
};


export {Task , Display , Project, ProjectList};