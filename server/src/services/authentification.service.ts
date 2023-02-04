import { BucketItem } from "../interface/bucket_item";
import { DatabaseService } from "./database.service";

export class AuthentificationService {
    private databaseService : DatabaseService;

    constructor(databaseService : DatabaseService)
    {   
        this.databaseService = databaseService;
    }

    createAccount(username : string, bucketlist: BucketItem[])
    {

    }

    authitifyUser(username: string)
    {
        
    }
}