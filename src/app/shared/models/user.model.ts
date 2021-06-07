export class User {

    public id: number;
    public userName: string;
    public email: string;
    public avatar: any;

    constructor(user: User) {
        this.id = user.id;
        this.userName = user.userName;
        this.email = user.email;
        this.avatar = user.avatar;
    }

}
