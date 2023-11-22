"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactModel = new mongoose_1.Schema({
    name: { type: String },
    phoneNumber: { type: String, unique: true },
    category: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("contacts", contactModel);
