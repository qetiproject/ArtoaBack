"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
exports.default = () => {
    return {
        db: (0, db_1.default)(),
        secretKey: process.env.SECRET_KEY,
    };
};
//# sourceMappingURL=index.js.map