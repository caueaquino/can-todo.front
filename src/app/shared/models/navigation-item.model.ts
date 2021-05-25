export class NavigationItem {

    public name: string;
    public route: string;

    constructor(navigationItem: NavigationItem) {
        this.name = navigationItem.name;
        this.route = navigationItem.route
    }

}
