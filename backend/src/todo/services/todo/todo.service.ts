import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/schemas/todo.schema';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(todoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndRemove(id).exec();
  }
}
