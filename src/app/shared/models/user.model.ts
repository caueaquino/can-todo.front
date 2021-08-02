export class User {

    public id?: number;
    public userName?: string;
    public email: string;
    public phone: string;
    public password: string;
    public lastModificationDate: Date;
    public creationDate: Date;

    constructor(user: User) {
        this.id = user?.id;
        this.userName = user?.userName;
        this.email = user.email;
        this.phone = user.phone;
        this.password = user.password;
        this.lastModificationDate = user.lastModificationDate;
        this.creationDate = user.creationDate;
    }

    public isSameAuthUser(user: User): boolean {
        if (this.email === user.email && this.password === user.password) {
            return true;
        }
        return false;
    }
}
