import { Tag } from 'src/app/shared/models/tag.model';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';

import { IProject } from 'src/app/shared/interfaces/project.interface';


export class Project implements IProject {

    public id: number;
    public projectTypeId: EProjectType;
    public name: string;
    public description: string;
    public tags: Array<Tag>;
    public targetDate: Date;
    public done: boolean;
    public lastModificationDate: Date;
    public creationDate: Date;

    constructor(project: IProject) {
        this.id = project.id;
        this.projectTypeId = project.projectTypeId;
        this.name = project.name;
        this.description = project.description;
        this.targetDate = project.targetDate;
        this.tags = project.tags;
        this.done = project.done;
        this.lastModificationDate = project.lastModificationDate;
        this.creationDate = project.creationDate;
    }

    public markAsDone(): void {
        this.done = true;
    }

    public markAsUndone(): void {
        this.done = false;
    }

}