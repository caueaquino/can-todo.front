import { ENavigationItem } from 'src/app/shared/enums/navigation-item.enum';

import { INavigationItem } from 'src/app/shared/interfaces/navigation-item.interface';


export class NavigationItem implements INavigationItem {

    public id: ENavigationItem;
    public name: string;
    public route: string;

    constructor(navigationItem: INavigationItem) {
        this.id = navigationItem.id;
        this.name = navigationItem.name;
        this.route = navigationItem.route
    }

}
