
import { IGetPostRepository } from "../../controllers/get-posts/protocols";
import { MongoClient } from "../../database/mongo";
import { Post } from "../../models/post";
import { MongoPost } from "../mongo-protocols";

export class MongoGetPostsRepository implements IGetPostRepository {
    async getPosts(): Promise<Post[]> {

     const posts = await MongoClient.db.collection<MongoPost>('posts').find({}).toArray();

     return posts.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
     }))
    }
}