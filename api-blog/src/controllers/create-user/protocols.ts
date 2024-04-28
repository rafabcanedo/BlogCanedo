import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface CreateUserParams {
 name: string;
 email: string;
 password: string;
 phone: string; // error with length => string | number type
}

export interface ICreateUserRepository {
 createUser(params: CreateUserParams): Promise<User>;
}

export interface ICreateUserController {
 handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>>;
}