"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regex = void 0;
exports.regex = {
    email: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
    phone: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,60}$/,
};
//# sourceMappingURL=regex.js.map