"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apiRoute_1 = require("./routers/apiRoute");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(apiRoute_1.apiRouter);
const { port } = process.env;
app.listen(port, async () => {
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected....');
        }
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }
    console.log(`Server has started on port ${port}..........`);
});
//# sourceMappingURL=app.js.map