import { TaskListItem } from 'src/app/shared/models/task-list-item.model';


export class TaskList {

    public id: number;
    public name: string;
    public tasks: Array<TaskListItem>;

    constructor(taskList: TaskList) {
        this.id = taskList.id;
        this.name = taskList.name;
        this.tasks = taskList.tasks;
    }

}
