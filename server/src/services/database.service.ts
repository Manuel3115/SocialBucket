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
        
        // let userInfo : UserInformations | null = {
        //     username : 'rak553',
        //     bucketList : [{name : 'IamAPro', isDone : false}]
        // };

        // this.addItemToBucketList(userInfo);

        //console.log(await this.addAcount('broyo', [{name : 'broyo', isDone : false}, {name : 'kijdh', isDone : false}]));
        //console.log(await this.getUsersWithAtleastOneObjectiveInCommonNotDone(userInfo));
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
        let userInfo : UserInformations | null = null

        if (!(await this.isUsernameFree(username)))
        {
            userInfo = await (this.database?.collection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.findOne(
                { username: username },
            );
        }
        return userInfo;
    }

    async getUsersWithObjectiveInCommonNotDone(userInfo : UserInformations) : Promise<UserInformations[]>
    {
        let usersSharingSameObjectives : UserInformations[] = [];

        if (userInfo.bucketList.length !== 0)
        {
            const userInformations = await (this.database?.collection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.find({}).toArray();
            for (let i = 0; i < userInformations.length; i++)
            {
                if (userInfo.username != userInformations[i].username && userInfo.bucketList.some(bucketItem => bucketItem.isDone == false && userInformations[i].bucketList.findIndex(item => bucketItem.name === item.name && item.isDone === false) >= 0))
                {
                    userInformations[i].bucketList = this.filterBucketListWithOnlyUndoneTasks(userInformations[i].bucketList);
                    usersSharingSameObjectives.push(userInformations[i]);
                }
            }
        }

        return usersSharingSameObjectives;
    }

    async getUsernamesWithObjective(objectiveName: string, isObjectiveDone: boolean) : Promise<string[]>
    {
        const userInformations = await (this.database?.collection(CollectionType.USERACCOUNT) as Collection<UserInformations>)?.find({}).toArray();
        const usernamesWithObjective : string[] = [];
        for (let i = 0; i < userInformations.length; i++)
        {
            if (userInformations[i].bucketList.findIndex((item) => objectiveName === item.name && item.isDone === isObjectiveDone) !== -1)
            {
                usernamesWithObjective.push(userInformations[i].username);
            }
        }
        return usernamesWithObjective;
    }

    async updateAccountInformations(userInformations : UserInformations)
    {
        if (!(await this.isUsernameFree(userInformations.username)))
        {
            this.database?.collection(CollectionType.USERACCOUNT)?.updateOne(
                {'username' : userInformations.username},
                {$set: {'bucketList' : userInformations.bucketList}}
            )
        }
    }

    private filterBucketListWithOnlyUndoneTasks(bucketList : BucketItem[]) : BucketItem[]
    {
        let i = 0;
        while (i < bucketList.length)
        {
            if (bucketList[i].isDone)
            {
                bucketList.splice(i, 1);
            }
            else 
            {
                i++;
            }
        }
        return bucketList;
    }

    async closeConnection(): Promise<void> {
        return this.client.close();
    }

    get database(): Db {
        return this.db;
    }
}