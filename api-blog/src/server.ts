import express from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repository/get-users/mongo-get-users";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
 config();

 const app = express();

 // Connection
 await MongoClient.connect()

 app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
 })

 const port = process.env.PORT || 3333;

 app.listen(port, () => console.log(`Listening api on port ${port} 🗞️`));
}

main();