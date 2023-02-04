import { DATABASE_NAME, DATABASE_URL } from '../constants/database-environment';
import { Collection, Db, MongoClient } from 'mongodb';
import { BucketItem } from '../interface/bucket_item';
import { CollectionType } from '../constants/database-constants';
import { UserInformations } from '../interface/user_informations';


export class DatabaseService {
    private client!: MongoClient;
    private db!: Db;

    async start(url: string = DATABASE_URL): Promise<MongoClient | null> {
        try {
            const client = await MongoClient.connect(url);
            this.client = client;
            this.db = client.db(DATABASE_NAME);
        } catch {
            throw new Error('Database connection error');
        }

        console.log(await this.getUserInformation('rak553'));
        return this.client;
    }

    async isUsernameFree(username: string) : Promise<boolean>
    {
        if (username != '')
        {
            const userAccount = await (this.database?.collection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.findOne(
                { username: username },
            );
            return userAccount === null || userAccount === undefined;
        }
        return true;
    }

    async addAcount(username: string, bucketList: BucketItem[]) : Promise<boolean>
    {
        let isCreationSuccess = false;
        if (username !== '' && bucketList.length !== 0 && await this.isUsernameFree(username))
        {
            const userInfo : UserInformations = {
                username,
                bucketList
            }
            await this.database?.collection(CollectionType.USERACCOUNT)?.insertOne(userInfo);
            isCreationSuccess = true;
        }
        return isCreationSuccess;
    }

    async getUserInformation(username : string) : Promise<UserInformations | null>
    {
        let userInfo : UserInformations | null = {
            username : '',
            bucketList : []
        };
        
        if (!(await this.isUsernameFree(username)))
        {
            userInfo = await (this.database?.collection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.findOne(
                { username: username },
            );
        }
        return userInfo;
    }

    async closeConnection(): Promise<void> {
        return this.client.close();
    }

    get database(): Db {
        return this.db;
    }
}