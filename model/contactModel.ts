import { Schema, model, Document } from "mongoose";

interface iContact {
  name: string;
  phoneNumber: string;
  category: string;
}


interface iContactData extends iContact, Document {}

const contactModel = new Schema<iContactData>(
  {
    name: { type: String },
    phoneNumber: { type: String, unique: true },
    category: { type: String },
  },
  { timestamps: true }
);

export default model<iContactData>("contacts", contactModel);
