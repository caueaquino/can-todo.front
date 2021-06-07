import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export interface IProject {

    id: number;
    typeId: EProjectType;
    name: string;
    tag: string;
    creationDate: Date;
    lastModification: Date;

}
