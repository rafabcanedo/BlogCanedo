import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdateUserParams {
 name?: string;
 email?: string;
 password?: string;
}

export interface IUpdateUserRepository {
 updateUser(id: string, params: UpdateUserParams): Promise<User>;
}