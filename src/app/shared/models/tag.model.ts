import { ITag } from 'src/app/shared/interfaces/tag.interface';


export class Tag implements ITag {

    public id: number;
    public name: string;
    public creationDate: Date;

    constructor(tag: ITag) {
        this.id = tag.id;
        this.name = tag.name;
        this.creationDate = tag.creationDate;
    }

}
