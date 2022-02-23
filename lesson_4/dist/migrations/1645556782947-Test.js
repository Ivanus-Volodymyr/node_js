"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1645472767107 = void 0;
class CreateTableUsers1645472767107 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(250) NOT NULL,
                lastName VARCHAR(250) NOT NULL
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Users
        `);
    }
}
exports.CreateTableUsers1645472767107 = CreateTableUsers1645472767107;
//# sourceMappingURL=1645556782947-Test.js.map