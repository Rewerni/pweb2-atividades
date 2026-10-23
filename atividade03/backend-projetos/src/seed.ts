import dataSource from './data-source';
import { Projeto } from './projetos/entities/projeto.entity';
import { Tarefa } from './tarefas/entities/tarefa.entity';

async function seed() {
  await dataSource.initialize();

  const tarefaRepo = dataSource.getRepository(Tarefa);
  const projetoRepo = dataSource.getRepository(Projeto);

  await tarefaRepo.clear();
  await projetoRepo.clear();

  await tarefaRepo.save([
    {
      titulo: 'Estudar ORM',
      descricao: 'TypeORM + PostgreSQL',
      concluida: false,
    },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  await projetoRepo.save([
    {
      nome: 'Faculdade',
      descricao: 'Atividades da faculdade',
      cor: 'azul',
    },
    { nome: 'Trabalho', cor: 'verde' },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}

seed();
