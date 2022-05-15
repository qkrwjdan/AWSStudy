import express, { Request, Response, NextFunction } from "express";
import config from "./config";
import db from "./loaders/database";
import Users from "./models/Users";

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
db.sync();
Users.sync();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.get(
  "/api/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await Users.findAll()
    return res.send(users);
  }
);

app.post(
  "/api/users",
  async (req: Request, res: Response, next: NextFunction) => {
    await Users.create({
      email: "test@naver.com",
      password: "123456789@",
    });

    return res.send("Success!");
  }
);

app.listen(config.port, () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: ${config.port} 🛡️
        #############################################
    `);
});
