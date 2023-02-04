import { DATABASE_NAME, DATABASE_URL } from '../constants/database-environment';
import { Collection, Db, MongoClient } from 'mongodb';
import 'reflect-metadata';
import { BucketItem } from '../interface/bucket_item';
import { CollectionType } from '../constants/database-constants';
import { UserInformations } from '../interface/user_informations'


export class DatabaseService {
    private db: Db;
    private client: MongoClient;

    async start(url: string = DATABASE_URL): Promise<MongoClient | null> {
        try {
            const client = await MongoClient.connect(url);
            this.client = client;
            this.db = client.db(DATABASE_NAME);
        } catch {
            throw new Error('Database connection error');
        }
        return this.client;
    }

    async isUsernameFree(username: string) : Promise<boolean>
    {
        if (username != '')
        {
            const userAccount = await (this.getCollection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.findOne(
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
            await this.getCollection(CollectionType.USERACCOUNT)?.insertOne(userInfo);
            isCreationSuccess = true;
        }
        return isCreationSuccess;
    }

    async getUserInformation(username : string) : Promise<UserInformations>
    {
        let userInfo : UserInformations = {
            username : '',
            bucketList : []
        };

        if (await !this.isUsernameFree(username))
        {
            
        }
    }

    private getCollection<T>(collectionType: string): Collection<T> {
        return this.database?.collection(collectionType);
    }

    get database(): Db {
        return this.db;
    }
}