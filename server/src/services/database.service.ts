import { DATABASE_NAME, DATABASE_URL } from '../constants/database-environment';
import { Collection, Db, MongoClient } from 'mongodb';
import 'reflect-metadata';
import { BucketItem } from '../interface/bucket_item';
import { CollectionType } from '../constants/database-constants';


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

    async addAcount(username: string, bucketlist: BucketItem[])
    {
        if (username != "" && bucketlist.length != 0)
        {
            await this.getCollection(CollectionType.USERACCOUNT)?.insertOne(username);
        }
    }

    private getCollection<T>(collectionType: string): Collection<T> {
        return this.database?.collection(collectionType);
    }

    get database(): Db {
        return this.db;
    }
}