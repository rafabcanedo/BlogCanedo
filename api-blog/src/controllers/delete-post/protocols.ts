import { Post } from "../../models/post";

export interface IDeletePostRepository {
 deletePost(id: string): Promise<Post>;
}