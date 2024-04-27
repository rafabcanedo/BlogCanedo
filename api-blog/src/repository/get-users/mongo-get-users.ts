import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
     return [
      {
        name: "Rafael",
        email: "rafa@gmail.com",
        password: "123",
        phone: 14996229445,
      }
     ]
    }
}