import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { FastifyInstance } from "fastify";
import { BadRequest } from "./_errors/bad-request";
import prisma from "../prisma/index";

export async function createUser(app: FastifyInstance) {
 app
 .withTypeProvider<ZodTypeProvider>()
 .post('/users', {
    schema: {
     sumary: 'Create an User',
     tags: ['users'],
     body: z.object({
      name: z.string({ invalid_type_error: 'The name needs a minimum 5 characters' }).min(5),
      email: z.string().email(),
      phone: z.number().min(4),
      password: z.string({ invalid_type_error: 'The name needs a minimum 5 characters' }).min(5),
      confirm_password: z.string({ invalid_type_error: 'The name needs a minimum 5 characters' }).min(5),
     }),
     params: z.object({
      // postId: z.string().uuid()
     }),
     response: {
      201: z.object({
        userId: z.string(),
      })
     },
    },
 }, async (request, reply) => {
   // const { postId } = request.params
   const { name, email, phone, password, confirm_password } = request.body

  /* const userfromEmail = await prisma.user.findUnique({
    where: {
      postId_email: {
        email,
        postId,
        name,
        phone,

      }
    }
   })

   if (userfromEmail !== null) {
     throw new BadRequest('This email is already registred for this post')
   } */

   /*const [ post, amounyOfUsersForPost ] = await Promise.all([
    prisma.post.findUnique({
      where: {
        id: postId,
      }
    }),

    prisma.user.count({
      where: {
        postId
      }
    })
   ])*/

   const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      password,
      confirm_password
    }
   })

   return reply.status(201).send({ userId: user.id})
 })
}


/*
params: z.object({
      postId: z.string().uuid()
     }),
     response: {
      201: z.object({
        userId: z.string(),
      })
     },
*/