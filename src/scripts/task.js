function Task(taskName,desc,dueDate,priority,notes,checklist,index){
    this.taskName=taskName;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
    this.checklist=checklist;
    this.index=index;
};
Task.prototype.getTaskPriority = function(){
    switch (this.priority){
        case 0:
            return "Low";
        case 1:
            return "Normal";
        case 2:
            return "High";
    }
};
export {Task};