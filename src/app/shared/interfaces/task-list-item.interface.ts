export interface ITaskListItem {

    id: number;
    projectId: number;
    name: string;
    description: string;
    tags: Array<any>;
    lastModificationDate: Date;
    creationDate: Date;

}
