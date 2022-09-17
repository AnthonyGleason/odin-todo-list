function Task(taskName,desc,dueDate,priority,notes,checklist,index){
    this.taskName=taskName;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
    this.checklist=checklist;
    this.index=index;
};

export {Task};