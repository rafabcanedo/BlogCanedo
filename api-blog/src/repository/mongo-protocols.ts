import { Post } from "../models/post";
import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;

export type MongoPost = Omit<Post, "id">;