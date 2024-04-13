import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import prisma from "../prisma/index";

export async function getUsers(app: FastifyInstance) {
 app
 .withTypeProvider<ZodTypeProvider>()
 .get('/users', {
   schema: {
    summary: 'Get Users',
    tags: ['users'],
    params: z.object({
     // postId: z.string().uuid(),
    }),
    querystring: z.object({
     query: z.string().nullish(),
     pageIndex: z.string().nullish().default('0').transform(Number),
    }),
    response: {
     200: z.object({
      users: z.array(
       z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
        phone: z.number(),
        password: z.string(),
        confirm_password: z.string(),
        created_at: z.date().nullable(),
       })
      )
     }),
    },
    },
    }, async (request, reply) => {
      // const { postId } = request.params
      const { pageIndex, query } = request.query

      const users = await prisma.user.findMany({
        select: {
         id: true,
         name: true,
         email: true,
         phone: true,
         password: true,
         confirm_password: true,
         created_at: true,
        },
        where: query ? {
         name: {
         contains: query,
         }
        } : {

        },
        take: 10,
        skip: pageIndex * 10,
        orderBy: {
         created_at: 'desc'
        }
      })

      return reply.send({
      users: users.map(user => {
       return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        confirm_password: user.confirm_password,
        created_at: user.created_at,
       }
      })
      })
  })
}