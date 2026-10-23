import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { ProjetosModule } from './projetos/projetos.module';
import { TarefasModule } from './tarefas/tarefas.module';

// Módulo raiz da aplicação. Ele apenas importa os outros módulos.
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TarefasModule,
    ProjetosModule,
  ],
})
export class AppModule {}
