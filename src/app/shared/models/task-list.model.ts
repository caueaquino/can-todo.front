import { Tag } from 'src/app/shared/models/tag.model';
import { TaskListItem } from 'src/app/shared/models/task-list-item.model';

import { ITaskList } from 'src/app/shared/interfaces/task-list.interface';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export class TaskList implements ITaskList {

    public id: number;
    public projectTypeId: EProjectType;
    public name: string;
    public tags: Array<Tag>;
    public tasks: Array<TaskListItem>;
    public creationDate: Date;
    public lastModificationDate: Date;

    constructor(taskList: ITaskList) {
        this.id = taskList.id;
        this.projectTypeId = EProjectType.TASK_LIST;
        this.name = taskList.name;
        this.tags = taskList.tags;
        this.tasks = taskList.tasks;
        this.creationDate = taskList.creationDate;
        this.lastModificationDate = taskList.lastModificationDate;
    }

}
