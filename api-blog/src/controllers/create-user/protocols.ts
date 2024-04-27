import { User } from "../../models/user";

export interface CreateUserParams {
 name: string;
 email: string;
 password: string;
 phone: number;
}

export interface ICreateUserRepository {
 createUser(params: CreateUserParams): Promise<User>;
}