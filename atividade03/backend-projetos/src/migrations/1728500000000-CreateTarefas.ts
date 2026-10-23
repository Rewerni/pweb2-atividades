import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTarefas1728500000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "tarefas" (
        "id" SERIAL NOT NULL,
        "titulo" character varying NOT NULL,
        "descricao" text,
        "concluida" boolean NOT NULL DEFAULT false,
        CONSTRAINT "PK_tarefas" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "tarefas"');
  }
}
