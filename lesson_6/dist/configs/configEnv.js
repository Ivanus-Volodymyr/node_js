"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.configEnv = {
    port: process.env.port || 5000,
    secret_key: process.env.secret_key,
    secret_key_refresh: process.env.secret_key_refresh,
};
//# sourceMappingURL=configEnv.js.map