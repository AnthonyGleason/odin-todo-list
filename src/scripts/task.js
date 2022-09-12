function Task(name,desc,dueDate,priority,notes,checklist,index){
    this.name=name;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
    this.checklist=checklist;
    this.index=index;
};

export {Task};