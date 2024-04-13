import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
   const userService = new CreateUserService()

   const user = await userService.execute();

   reply.send(user)
  }
}

export { CreateUserController }