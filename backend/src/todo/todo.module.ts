import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from 'src/schemas/todo.schema';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';

@Module({
  controllers: [TodoController],
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  providers: [TodoService]
})
export class TodoModule {}
