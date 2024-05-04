import { Post } from "../../models/post";

export interface IGetPostRepository {
 getPosts(): Promise<Post[]>;
}