import { ENavigationItem } from 'src/app/shared/enums/navigation-item.enum';


export class NavigationItem {

    public id: ENavigationItem;
    public name: string;
    public route: string;

    constructor(navigationItem: NavigationItem) {
        this.id = navigationItem.id;
        this.name = navigationItem.name;
        this.route = navigationItem.route
    }

}
