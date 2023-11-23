import { Request, Response } from "express";
import contactModel from "../model/contactModel";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, category } = req.body;
    const user = await contactModel.create({ name, phoneNumber, category });
    return res.status(201).json({
      message: "Contact created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while creating contact",
      data: error?.message,
    });
  }
};

export const viewAllContact = async (req: Request, res: Response) => {
  try {
    const users = await contactModel.find().sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Viewing all contacts on the platform",
      data: users,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while viewing all contact",
      data: error?.message,
    });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { contactID } = req.params;
    const user = await contactModel.findByIdAndDelete(contactID);
    return res.status(201).json({
      message: "Deleted successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while deleting user",
      data: error?.message,
    });
  }
};

export const searchOneContactName = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const contact = await contactModel.findOne({ name }).sort({
      name: -1,
    });
    return res.status(200).json({
      message: "User found",
      data: contact,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Account error occured while searching one account",
      data: error?.message,
    });
  }
};

export const searchOneContactCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    const contact = await contactModel.findOne({ category }).sort({
      name: -1,
    });
    return res.status(200).json({
      message: "User found",
      data: contact,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Account error occured while searching one account",
      data: error?.message,
    });
  }
};
