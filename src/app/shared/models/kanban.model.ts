import { Tag } from 'src/app/shared/models/tag.model';

import { IKanban } from 'src/app/shared/interfaces/kanban.interface';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export class Kanban implements IKanban {

    public id: number;
    public projectTypeId: EProjectType;
    public name: string;
    public tags: Array<Tag>;
    public creationDate: Date;
    public lastModificationDate: Date;

    constructor(kanban: IKanban) {
        this.id = kanban.id;
        this.projectTypeId = EProjectType.KANBAN;
        this.name = kanban.name;
        this.tags = kanban.tags;
        this.creationDate = kanban.creationDate;
        this.lastModificationDate = kanban.lastModificationDate;
    }

}
