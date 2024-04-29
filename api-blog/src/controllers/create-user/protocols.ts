import { User } from "../../models/user";

export interface CreateUserParams {
 name: string;
 email: string;
 password: string;
 phone: string; // error with length => string | number type
}

export interface ICreateUserRepository {
 createUser(params: CreateUserParams): Promise<User>;
}