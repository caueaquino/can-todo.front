export class User {

    public userName: string;
    public email: string;
    public avatar: any;

    constructor(user: User) {
        this.userName = user.userName;
        this.email = user.email;
        this.avatar = user.avatar;
    }

}
