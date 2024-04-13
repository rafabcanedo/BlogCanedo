import fastify from "fastify";

import fastifyCors from "@fastify/cors";

import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { errorHandler } from "./error-handler";
import { createUser } from "./routes/create-user";
import { getUsers } from "./routes/get-users";

export const app = fastify()

app.register(fastifyCors, {
 origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createUser)
app.register(getUsers)

app.setErrorHandler(errorHandler)

app.listen({
 port: 3333,
}).then(() => {
    console.log('HTTP server running! 🗞️')
})