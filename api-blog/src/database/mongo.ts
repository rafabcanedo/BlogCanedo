import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
 
 client: undefined as unknown as Mongo,
 db: undefined as unknown as Db,

 async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "mongodb+srv://rafabc:blogpass1@blog.wz81qso.mongodb.net/";
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db("blog-db")

    this.client = client;
    this.db = db;

    console.log("conntect to mongodb!")
 }
}