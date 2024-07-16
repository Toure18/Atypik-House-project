import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAllTables1721144575729 implements MigrationInterface {
    name = 'CreateAllTables1721144575729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`accountType\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` text NOT NULL, \`date\` date NOT NULL, \`userId\` int NULL, \`propertyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`equipment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`listEquipment\` text NOT NULL, \`propertyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`properties\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`piecesNb\` int NOT NULL, \`capacity\` int NOT NULL, \`price\` float NOT NULL, \`pictures\` text NOT NULL, \`availability\` date NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`booking\` (\`id\` int NOT NULL AUTO_INCREMENT, \`beginDate\` date NOT NULL, \`endDate\` date NOT NULL, \`userId\` int NULL, \`propertyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` float NOT NULL, \`status\` varchar(255) NOT NULL, \`bookingId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_de87485f6489f5d0995f584195\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_c0354a9a009d3bb45a08655ce3b\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_26e696e5173c8a22fe00edff2f7\` FOREIGN KEY (\`propertyId\`) REFERENCES \`properties\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`equipment\` ADD CONSTRAINT \`FK_bd1868b0c4f897f8af56c6b918b\` FOREIGN KEY (\`propertyId\`) REFERENCES \`properties\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`properties\` ADD CONSTRAINT \`FK_6b55a80fd17a5bb77b753635496\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`booking\` ADD CONSTRAINT \`FK_336b3f4a235460dc93645fbf222\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`booking\` ADD CONSTRAINT \`FK_aaacfb3ddf4c074dc358a9a94a0\` FOREIGN KEY (\`propertyId\`) REFERENCES \`properties\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_5738278c92c15e1ec9d27e3a098\` FOREIGN KEY (\`bookingId\`) REFERENCES \`booking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_5738278c92c15e1ec9d27e3a098\``);
        await queryRunner.query(`ALTER TABLE \`booking\` DROP FOREIGN KEY \`FK_aaacfb3ddf4c074dc358a9a94a0\``);
        await queryRunner.query(`ALTER TABLE \`booking\` DROP FOREIGN KEY \`FK_336b3f4a235460dc93645fbf222\``);
        await queryRunner.query(`ALTER TABLE \`properties\` DROP FOREIGN KEY \`FK_6b55a80fd17a5bb77b753635496\``);
        await queryRunner.query(`ALTER TABLE \`equipment\` DROP FOREIGN KEY \`FK_bd1868b0c4f897f8af56c6b918b\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_26e696e5173c8a22fe00edff2f7\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_c0354a9a009d3bb45a08655ce3b\``);
        await queryRunner.query(`DROP INDEX \`IDX_de87485f6489f5d0995f584195\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP TABLE \`payment\``);
        await queryRunner.query(`DROP TABLE \`booking\``);
        await queryRunner.query(`DROP TABLE \`properties\``);
        await queryRunner.query(`DROP TABLE \`equipment\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
