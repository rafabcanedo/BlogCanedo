import { Post } from "../../models/post";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreatePostParams, ICreatePostRepository } from "./protocols";
import { badRequest, created, serverError } from "../helpers";

export class CreatePostController implements IController {
 constructor(private readonly createPostRepository: ICreatePostRepository) {}

 async handle(httpRequest: HttpRequest<CreatePostParams>): Promise<HttpResponse<Post | string>> {
    try {
        const requiredFields = ["title", "content", "category"];
  
        for (const field of requiredFields) {
          if (!httpRequest?.body?.[field as keyof CreatePostParams]?.length) {
            return badRequest(`Field ${field} is required`)
          }
        }
  
       const post = await this.createPostRepository.createPost(httpRequest.body!);
  
       return created<Post>(post)
  
      } catch (error) {
        return serverError()
      }
 }
}