"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable1646404215751 = void 0;
class UsersTable1646404215751 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(250) NOT NULL,
                lastName VARCHAR(250) NOT NULL,
                age INT CHECK (age > 0),
                phone VARCHAR(250) NOT NULL UNIQUE,
                email VARCHAR(250) NOT NULL UNIQUE,
                password VARCHAR(250) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Users
        `);
    }
}
exports.UsersTable1646404215751 = UsersTable1646404215751;
//# sourceMappingURL=1646404215751-Users.js.map