import { BucketItem } from "../interface/bucket_item";

export class Account
{
    public username : string;
    public bucketlist : BucketItem[];

    constructor(user : string, list : BucketItem[])
    {
        this.username = user;
        this.bucketlist = list;
    }
}