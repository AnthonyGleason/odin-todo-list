let renderInitSite = function(){
    //store html body element
    let bodyElement = document.querySelector('body');

    //create the sidebar div
    let sidebarDiv = document.createElement('div');
    sidebarDiv.setAttribute('class', 'sidebar');
        //create the sidebar title div
        let sidebarTitleDiv = document.createElement('div');
        sidebarTitleDiv.setAttribute('class', 'sidebar-title');
        sidebarTitleDiv.textContent="Projects";
        //create the project item container div
        let projectItemContainerDiv = document.createElement('div');
        projectItemContainerDiv.setAttribute('class', 'project-item-container');
        //create the new project button
        let newProjectButton = document.createElement('button');
        newProjectButton.setAttribute('class', 'new-project-button');
        newProjectButton.textContent="New Project";
        //create the new project form
        let newProjectForm = document.createElement('form');
        newProjectForm.setAttribute('id', 'new-project-form');
        newProjectForm.setAttribute('class', 'sidebar-project-form');
        newProjectForm.setAttribute('style', 'display: none');
            //create the project name input field
            let newProjectNameInput = document.createElement('input');
            newProjectNameInput.setAttribute('id', 'projectName');
            newProjectNameInput.setAttribute('type', 'text');
            newProjectNameInput.setAttribute('placeholder', 'Project Name');
            //create the project button container
            let newProjectButtonContainer = document.createElement('div');
            newProjectButtonContainer.setAttribute('class', 'project-button-container');
                //create the project submit button
                let newProjectSubmitButton = document.createElement('button');
                newProjectSubmitButton.setAttribute('id', 'project-submit-button');
                newProjectSubmitButton.setAttribute('class', 'sidebar-button');
                newProjectSubmitButton.setAttribute('type', 'button');
                newProjectSubmitButton.textContent="Submit";
                //create the project cancel button
                let newProjectCancelButton = document.createElement('button');
                newProjectCancelButton.setAttribute('id', 'project-cancel-button');
                newProjectCancelButton.setAttribute('class', 'sidebar-button');
                newProjectCancelButton.setAttribute('type', 'button');
                newProjectCancelButton.textContent="Cancel";
    //append elements to body
    bodyElement.appendChild(sidebarDiv);
        sidebarDiv.appendChild(sidebarTitleDiv);
        sidebarDiv.appendChild(projectItemContainerDiv);
        sidebarDiv.appendChild(newProjectButton);
        sidebarDiv.appendChild(newProjectForm);
            newProjectForm.appendChild(newProjectNameInput);
            newProjectForm.appendChild(newProjectButtonContainer);
                newProjectButtonContainer.appendChild(newProjectSubmitButton);
                newProjectButtonContainer.appendChild(newProjectCancelButton);
    
    //create the content div
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'content');
        //create the content title div
        let contentTitleDiv = document.createElement('div');
        contentTitleDiv.setAttribute('class', 'content-title');
        contentTitleDiv.textContent='Default Project';
        //create the task item container
        let taskItemContainer = document.createElement('div');
        taskItemContainer.setAttribute('class', 'task-item-container');
        //create the new task button
        let newTaskButton = document.createElement('button');
        newTaskButton.setAttribute('class', 'new-task-button');
        newTaskButton.textContent='New Task';
        //create the new task form
        let newTaskForm = document.createElement('form');
        newTaskForm.setAttribute('id', 'new-task-form');
        newTaskForm.setAttribute('style', 'display: none');
            //create the new task name input field
            let newTaskNameInput = document.createElement('input');
            newTaskNameInput.setAttribute('type', 'text');
            newTaskNameInput.setAttribute('id', 'taskName');
            newTaskNameInput.setAttribute('placeholder', 'Task Name');
            //create the new task description input field
            let newTaskDescInput = document.createElement('input');
            newTaskDescInput.setAttribute('type', 'text');
            newTaskDescInput.setAttribute('id', 'taskDesc');
            newTaskDescInput.setAttribute('placeholder', 'Task Description');
            //create the new task due date input field
            let newTaskDueDateInput = document.createElement('input');
            newTaskDueDateInput.setAttribute('type', 'date');
            newTaskDueDateInput.setAttribute('id', 'taskDueDate');
            //create the new task button container
            let newTaskButtonContainer = document.createElement('div');
            newTaskButtonContainer.setAttribute('class', 'task-button-container');
                //create the new task submit button
                let newTaskSubmitButton = document.createElement('button');
                newTaskSubmitButton.setAttribute('type', 'button');
                newTaskSubmitButton.setAttribute('id', 'task-submit-button');
                newTaskSubmitButton.textContent='Submit';
                //create the new task cancel button
                let newTaskCancelButton = document.createElement('button');
                newTaskCancelButton.setAttribute('type', 'button');
                newTaskCancelButton.setAttribute('id', 'task-cancel-button');
                newTaskCancelButton.textContent='Cancel';
    //append elements to body
    bodyElement.appendChild(contentDiv);
        contentDiv.appendChild(contentTitleDiv);
        contentDiv.appendChild(taskItemContainer);
        contentDiv.appendChild(newTaskButton);
        contentDiv.appendChild(newTaskForm);
            newTaskForm.appendChild(newTaskNameInput);
            newTaskForm.appendChild(newTaskDescInput);
            newTaskForm.appendChild(newTaskDueDateInput);
            newTaskForm.appendChild(newTaskButtonContainer);
                newTaskButtonContainer.appendChild(newTaskSubmitButton);
                newTaskButtonContainer.appendChild(newTaskCancelButton);
};

export {renderInitSite};