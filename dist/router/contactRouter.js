"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controller/contactController");
const router = express_1.default.Router();
router.route("/create-contact").post(contactController_1.createContact);
router.route("/view-all-contact").get(contactController_1.viewAllContact);
router.route("/delete-contact/:contactID").delete(contactController_1.deleteContact);
exports.default = router;
