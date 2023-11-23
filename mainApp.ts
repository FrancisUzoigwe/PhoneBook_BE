import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import contact from "./router/contactRouter";
export const mainApp = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use("/api", contact);
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You're using Francis Kossyrisochukwu Uzoigwe's PhoneBookAPi",
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "Error occured while using default get",
        data: error?.message,
      });
    }
  });
  app.get("/api", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You're using Francis Kossyrisochukwu Uzoigwe's PhoneBookAPi",
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "Error occured while using default get",
        data: error?.message,
      });
    }
  });
};
