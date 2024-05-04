import { Post } from "../../models/post";

export interface CreatePostParams {
 title: string;
 content: string;
 category: string;
}

export interface ICreatePostRepository {
 createPost(params: CreatePostParams): Promise<Post>;
}