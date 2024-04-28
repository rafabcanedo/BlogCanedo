import { IGetUsersController, IGetUsersRepository } from "./protocols";

// Dependencies Inject
// constructor()...

export class GetUsersController implements IGetUsersController {

 constructor(private readonly getUsersRepository: IGetUsersRepository) {}

 async handle() {
   try {
    // request validation
    // Direct call to Repository
    const users = await this.getUsersRepository.getUsers();

    return {
     statusCode: 200,
     body: users,
    }
   } catch (error) {
    return {
     statusCode: 500,
     body: "Something went wrong",
    }
   }
 }
}