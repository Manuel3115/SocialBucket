export class Account
{
    public username : string;
    public bucketlist : string[];

    constructor(user : string, list : string[])
    {
        this.username = user;
        this.bucketlist = list;
    }
}