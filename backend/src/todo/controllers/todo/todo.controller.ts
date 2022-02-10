import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from 'src/todo/dto/create-todo.dto';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';
import { TodoService } from 'src/todo/services/todo/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(){
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: CreateTodoDto){
    const { text } = todo;
    if(!text || text.trim() === '' || typeof text !== 'string'){
      throw new HttpException('Invalid todo text', HttpStatus.BAD_REQUEST);
    }

    return this.todoService.create(todo);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string){
    
    const todo = await this.todoService.findOne(id);
    if(!todo){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return todo;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() todo: UpdateTodoDto){
    const updatedTodo = await this.todoService.update(id, todo);
    if(!updatedTodo){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string){
    const todo = await this.todoService.remove(id);
    if(!todo){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return todo;
  }
}
