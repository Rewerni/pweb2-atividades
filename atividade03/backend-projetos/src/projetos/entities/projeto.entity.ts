import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projetos')
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @Column()
  cor: string;
}
