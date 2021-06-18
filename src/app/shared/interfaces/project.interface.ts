import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export interface IProject {

    id: number;
    projectTypeId: EProjectType;
    name: string;
    tags: Array<string>;
    targetDate: Date;
    lastModificationDate: Date;
    creationDate: Date;

}
