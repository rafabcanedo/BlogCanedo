import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import { MongoClient } from "./database/mongo";

import { MongoGetUsersRepository } from "./repository/get-users/mongo-get-users";
import { MongoGetPostsRepository } from "./repository/get-posts/mongo-get-posts";
import { MongoCreateUserRepository } from "./repository/create-user/mongo-create-user";
import { MongoCreatePostRepository } from "./repository/create-post/mongo-create-post";
import { MongoUpdateUserRepository } from "./repository/update-user/mongo-update-user";
import { MongoDeleteUserRepository } from "./repository/delete-user/mongo-delete-user";
import { MongoDeletePostRepository } from "./repository/delete-post/mongo-delete-post";

import { GetUsersController } from "./controllers/get-users/get-users";
import { GetPostsController } from "./controllers/get-posts/get-posts";
import { CreateUserController } from "./controllers/create-user/create-user";
import { CreatePostController } from "./controllers/create-post/create-post";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";
import { DeletePostController } from "./controllers/delete-post/delete-post";

const main = async () => {

 config();

 const app = express();

 app.use(express.json());

 app.use(cors());

 // Connection
 await MongoClient.connect()


 // Users
 app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.status(statusCode).send(body);
 })

 app.post("/users", async (req, res) => {
  const mongoCreateUserRepository = new MongoCreateUserRepository();

  const createUserController = new CreateUserController(mongoCreateUserRepository);

  const { body, statusCode } = await createUserController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
 })

 app.patch("/users/:id", async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository()

  const updateUserController = new UpdateUserController(mongoUpdateUserRepository)

  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params
  })

  res.status(statusCode).send(body);
 })

 app.delete("/users/:id", async (req, res) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository()

  const deleteUserController = new DeleteUserController(mongoDeleteUserRepository)

  const { body, statusCode } = await deleteUserController.handle({
    params: req.params
  })

  res.status(statusCode).send(body);
 })


 // Posts
 app.get("/posts", async (req, res) => {
  const mongoGetPostsRepository = new MongoGetPostsRepository();

  const getPostsController = new GetPostsController(mongoGetPostsRepository);

  const { body, statusCode } = await getPostsController.handle();

  res.status(statusCode).send(body);
 })

 app.post("/posts", async (req, res) => {
  const mongoCreatePostRepository = new MongoCreatePostRepository();

  const createPostController = new CreatePostController(mongoCreatePostRepository);

  const { body, statusCode } = await createPostController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
 })

 app.delete("/posts/:id", async (req, res) => {
  const mongoDeletePostRepository = new MongoDeletePostRepository()

  const deletePostController = new DeletePostController(mongoDeletePostRepository)

  const { body, statusCode } = await deletePostController.handle({
    params: req.params
  })

  res.status(statusCode).send(body);
 })

 const port = process.env.PORT || 3333;

 app.listen(port, () => console.log(`Listening api on port ${port} 🗞️`));
}

main();