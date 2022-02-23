"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const a = () => {
    console.log('login');
};
a();
app.listen('5500', () => {
    console.log('Server has started on port 5500..........');
});
//# sourceMappingURL=app.js.map