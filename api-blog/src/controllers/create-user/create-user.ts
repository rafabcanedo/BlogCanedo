import validator from "validator";

import { User } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";
import { badRequest, created, serverError } from "../helpers";

export class CreateUserController implements IController {
 constructor(private readonly createUserRepository: ICreateUserRepository) {}

 async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User | string>> {
    try {
      // Validation fields"
      const requiredFields = ["name", "email", "password", "phone"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Field ${field} is required`)
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
       return badRequest("Email is invalid")
      }

     const user = await this.createUserRepository.createUser(httpRequest.body!);

     return created<User>(user)

    } catch (error) {
      return serverError()
    }
 }
}