import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjetos1728500001000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "projetos" (
        "id" SERIAL NOT NULL,
        "nome" character varying(60) NOT NULL,
        "descricao" text,
        "cor" character varying NOT NULL,
        CONSTRAINT "PK_projetos" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "projetos"');
  }
}
