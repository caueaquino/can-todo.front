export class TaskListItem {
    
    public id: number;
    public name: string;
    public description: string;

    constructor(taskListItem: TaskListItem) {
        this.id = taskListItem.id;
        this.name = taskListItem.name;
        this.description = taskListItem.description;
    }

}
