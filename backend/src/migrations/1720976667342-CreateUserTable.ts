import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1720976667342 implements MigrationInterface {
    name = 'CreateUserTable1720976667342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(80) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(80) NOT NULL, \`lastname\` varchar(80) NOT NULL, \`accountType\` varchar(80) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
