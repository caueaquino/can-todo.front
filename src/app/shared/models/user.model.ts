import { IUser } from 'src/app/shared/interfaces/user.interface';


export class User implements IUser {

    public id: number;
    public userName: string;
    public email: string;
    public avatar: any;

    constructor(user: IUser) {
        this.id = user.id;
        this.userName = user.userName;
        this.email = user.email;
        this.avatar = user.avatar;
    }

}
