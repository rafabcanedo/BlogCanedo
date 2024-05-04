import { Post } from "../../models/post";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetPostRepository } from "./protocols";

export class GetPostsController implements IController {

 constructor(private readonly getPostsRepository: IGetPostRepository) {}

 async handle(): Promise<HttpResponse<Post[] | string>> {
   try {

    const posts = await this.getPostsRepository.getPosts();

    return ok<Post[]>(posts)
   } catch (error) {
    return serverError()
   }
 }
}