import { ITaskListItem } from 'src/app/shared/interfaces/task-list-item.interface';


export class TaskListItem implements ITaskListItem {

    public id: number;
    public projectId: number;
    public name: string;
    public description: string;
    public tags: Array<any>;
    public lastModificationDate: Date;
    public creationDate: Date;

    constructor(taskListItem: ITaskListItem) {
        this.id = taskListItem.id;
        this.projectId = taskListItem.projectId;
        this.name = taskListItem.name;
        this.description = taskListItem.description;
        this.tags = taskListItem.tags;
        this.lastModificationDate = taskListItem.lastModificationDate;
        this.creationDate = taskListItem.creationDate;
    }

}
