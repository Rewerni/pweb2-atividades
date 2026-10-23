import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

// Um módulo agrupa um recurso: aqui, o controller e o service de "tarefas".
@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
