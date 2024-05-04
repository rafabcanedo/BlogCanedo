
import { CreatePostParams, ICreatePostRepository } from "../../controllers/create-post/protocols";
import { MongoClient } from "../../database/mongo";
import { Post } from "../../models/post";
import { MongoPost } from "../mongo-protocols";

export class MongoCreatePostRepository implements ICreatePostRepository {
 async createPost(params: CreatePostParams): Promise<Post> {

  const { insertedId } = await MongoClient.db.collection("posts").insertOne(params);

  const post = await MongoClient.db.collection<MongoPost>("posts").findOne({ id: insertedId });

  if (!post) {
    throw new Error("Post not created");
  }

  const { _id, ...rest } = post;

  return { id: _id.toHexString(), ...rest};
 }
}