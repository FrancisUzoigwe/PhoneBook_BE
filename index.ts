import express from "express";
import { mainApp } from "./mainApp";
import { phoneBookDB } from "./config/phoneBookDB";
import env from "dotenv";
env.config();

const app = express();

const port: number = parseInt(process.env.PORT!);

mainApp(app);
const Server = app.listen(port, () => {
  phoneBookDB();
  console.log("Server is live on port", port);
});

process.on("uncaughtException", (error) => {
  console.log("Server is shutting down due to an uncaught exception", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("Server is shutting down due to an unhandled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
