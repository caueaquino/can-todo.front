import { EProjectType } from 'src/app/shared/enums/project-type.enum';
import { IProject } from 'src/app/shared/interfaces/project.interface';


export class Kanban implements IProject {

    public id: number;
    public typeId: EProjectType;
    public name: string;
    public tag: string;
    public creationDate: Date;
    public lastModification: Date;

    constructor(kanban: Kanban) {
        this.id = kanban.id;
        this.typeId = EProjectType.KANBAN;
        this.name = kanban.name;
        this.tag = kanban.tag;
        this.creationDate = kanban.creationDate;
        this.lastModification = kanban.lastModification;
    }

}
