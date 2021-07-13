import { ITag } from 'src/app/shared/interfaces/tag.interface';

import { EProjectType } from 'src/app/shared/enums/project-type.enum';


export interface IKanban {

    id: number;
    projectTypeId: EProjectType;
    name: string;
    tags: Array<ITag>;
    creationDate: Date;
    lastModificationDate: Date;

}
