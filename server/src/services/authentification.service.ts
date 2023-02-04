import { BucketItem } from "../interface/bucket_item";
import { DatabaseService } from "./database.service";
import { Service } from 'typedi';

export class AuthentificationService {
    private databaseService : DatabaseService;

    constructor()
    {
        this.databaseService = new DatabaseService();
    }

    createAccount(username : string, bucketlist: BucketItem[])
    {

    }

    authitifyUser(username: string)
    {
        
    }
}