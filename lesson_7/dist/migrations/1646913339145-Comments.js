"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments1646913339145 = void 0;
const typeorm_1 = require("typeorm");
class Comments1646913339145 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Comments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'text',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },
                {
                    name: 'authorId',
                    type: 'int',
                },
                {
                    name: 'postId',
                    type: 'int',
                },
                {
                    name: 'like',
                    type: 'int',
                },
                {
                    name: 'dislike',
                    type: 'int',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'deleteAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['postId'],
                    referencedTableName: 'Posts',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['authorId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Posts', true);
    }
}
exports.Comments1646913339145 = Comments1646913339145;
//# sourceMappingURL=1646913339145-Comments.js.map