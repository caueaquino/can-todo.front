import { EProjectType } from 'src/app/shared/enums/project-type.enum';
import { IProject } from 'src/app/shared/interfaces/project.interface';


export class Project implements IProject {

    public id: number;
    public typeId: EProjectType;
    public name: string;
    public tag: string;
    public creationDate: Date;
    public lastModification: Date;

    constructor(project: Project) {
        this.id = project.id;
        this.typeId = project.typeId;
        this.name = project.name;
        this.tag = project.tag;
        this.creationDate = project.creationDate;
        this.lastModification = project.lastModification;
    }

}