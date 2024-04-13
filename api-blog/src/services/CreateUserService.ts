import prismaClient from "../prisma";

class CreateUserService {
  async execute() {
   console.log("Calling user route");

   return { ok: true }
  }
}

export { CreateUserService }