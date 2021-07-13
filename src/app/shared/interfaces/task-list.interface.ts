import { ITag } from 'src/app/shared/interfaces/tag.interface';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';

import { TaskListItem } from 'src/app/shared/models/task-list-item.model';


export interface ITaskList {

    id: number;
    projectTypeId: EProjectType;
    name: string;
    tags: Array<ITag>;
    tasks: Array<TaskListItem>
    creationDate: Date;
    lastModificationDate: Date;

}

