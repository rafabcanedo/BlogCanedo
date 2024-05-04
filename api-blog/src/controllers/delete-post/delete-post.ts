import { Post } from "../../models/post";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeletePostRepository } from "./protocols";

export class DeletePostController implements IController {
 constructor(private readonly deletePostRepository: IDeletePostRepository) {}

 async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Post | string>> {
  try {
   const id = httpRequest?.params?.id;

   if(!id) {
    return badRequest("Missing post id")
   }

   const post = await this.deletePostRepository.deletePost(id);

   return ok<Post>(post)
  } catch (error) {
    
    return serverError()
    
  }
 }
}