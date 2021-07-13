import { ITag } from 'src/app/shared/interfaces/tag.interface';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export interface IProject {

    id: number;
    projectTypeId: EProjectType;
    name: string;
    tags: Array<ITag>;
    targetDate: Date;
    lastModificationDate: Date;
    creationDate: Date;

}
