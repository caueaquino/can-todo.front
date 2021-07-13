import { Tag } from 'src/app/shared/models/tag.model';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';

import { IProject } from 'src/app/shared/interfaces/project.interface';


export class Project implements IProject {

    public id: number;
    public projectTypeId: EProjectType;
    public name: string;
    public tags: Array<Tag>;
    public targetDate: Date;
    public lastModificationDate: Date;
    public creationDate: Date;

    constructor(project: IProject) {
        this.id = project.id;
        this.projectTypeId = project.projectTypeId;
        this.name = project.name;
        this.targetDate = project.targetDate;
        this.tags = project.tags;
        this.lastModificationDate = project.lastModificationDate;
        this.creationDate = project.creationDate;
    }

}