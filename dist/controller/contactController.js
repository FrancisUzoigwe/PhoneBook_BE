"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.viewAllContact = exports.createContact = void 0;
const contactModel_1 = __importDefault(require("../model/contactModel"));
const enums_1 = require("../config/enums");
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phoneNumber, category } = req.body;
        const user = yield contactModel_1.default.create({ name, phoneNumber, category });
        return res.status(enums_1.STATUS.CREATED).json({
            message: "Contact created successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured while creating contact",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.createContact = createContact;
const viewAllContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield contactModel_1.default.find().sort({
            createdAt: -1,
        });
        return res.status(200).json({
            message: "Viewing all contacts on the platform",
            data: users,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured while viewing all contact",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.viewAllContact = viewAllContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const user = yield contactModel_1.default.findByIdAndDelete(contactID);
        return res.status(201).json({
            message: "Deleted successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occured while deleting user",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.deleteContact = deleteContact;
