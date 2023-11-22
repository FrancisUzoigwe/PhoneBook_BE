import express from "express";
import {
  createContact,
  deleteContact,
  viewAllContact,
} from "../controller/contactController";
const router = express.Router();
router.route("/create-contact").post(createContact);
router.route("/view-all-contact").get(viewAllContact);
router.route("/delete-contact/:contactID").delete(deleteContact);

export default router;
