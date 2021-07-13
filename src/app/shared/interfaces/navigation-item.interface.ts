import { ENavigationItem } from 'src/app/shared/enums/navigation-item.enum';


export interface INavigationItem {

    id: ENavigationItem;
    name: string
    route: string;

}
