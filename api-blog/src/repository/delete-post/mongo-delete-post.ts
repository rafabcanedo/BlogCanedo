import { ObjectId } from "mongodb";
import { IDeletePostRepository } from "../../controllers/delete-post/protocols";
import { MongoClient } from "../../database/mongo";
import { Post } from "../../models/post";
import { MongoPost } from "../mongo-protocols";

export class MongoDeletePostRepository implements IDeletePostRepository {
 async deletePost(id: string): Promise<Post> {
  const post = await MongoClient.db.collection<MongoPost>("posts").findOne({ _id: new ObjectId(id) });

  if (!post) {
    throw new Error("Post not found");
  }

  const { deletedCount } = await MongoClient.db.collection("posts").deleteOne({ _id: new ObjectId(id) });

  if (!deletedCount) {
    throw new Error("Post not deleted");
  }

  const { _id, ...rest } = post;

  return {id: _id.toHexString(), ...rest}
 }
}