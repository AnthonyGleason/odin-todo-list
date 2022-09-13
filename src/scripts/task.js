function Task(taskName,desc,dueDate,priority,notes,checkList,index){
    this.taskName=taskName;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
    this.checkList=checkList;
    this.index=index;
};
Task.prototype.toggleCheckList = function (){
    this.checkList==true ? this.checkList=false : this.checkList=true;
};
Task.prototype.updateTaskData = function (taskName,desc,dueDate,priority,notes,checklist){
    this.taskName=taskName;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.notes=notes;
};
export {Task};