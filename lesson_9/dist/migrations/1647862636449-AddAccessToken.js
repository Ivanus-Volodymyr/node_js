"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccessToken1647862636449 = void 0;
class AddAccessToken1647862636449 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE Tokens ADD COLUMN accessToken VARCHAR(250) NOT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE Tokens DROP COLUMN accessToken');
    }
}
exports.AddAccessToken1647862636449 = AddAccessToken1647862636449;
//# sourceMappingURL=1647862636449-AddAccessToken.js.map