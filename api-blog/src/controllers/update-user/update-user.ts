import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateUserController, IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IUpdateUserController {
 constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

 async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
  
 const id = httpRequest?.params?.id;
 const body = httpRequest?.body;

 try {
  if (!id) {
   return {
    statusCode: 400,
    body: "Missing user id",
   };
  }

  const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
    "name",
    "email",
    "password",
  ];

  const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
    (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
  );

  if (someFieldIsNotAllowedToUpdate) {
    return {
     statusCode: 400,
     body: "Some received field is not allowed",
    };
  }

  const user = await this.updateUserRepository.updateUser(id, body);

  return {
    statusCode: 200,
    body: user,
  }
  } catch (error) {
    return {
     statusCode: 500,
     body: "Something went wrong",
    }
  }
 }
}