"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const contactRouter_1 = __importDefault(require("./router/contactRouter"));
const mainApp = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("dev"));
    app.use((0, helmet_1.default)());
    app.use("/api", contactRouter_1.default);
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "You're using Francis Kossyrisochukwu Uzoigwe's PhoneBookAPi",
            });
        }
        catch (error) {
            return res.status(400).json({
                message: "Error occured while using default get",
                data: error === null || error === void 0 ? void 0 : error.message,
            });
        }
    });
};
exports.mainApp = mainApp;
