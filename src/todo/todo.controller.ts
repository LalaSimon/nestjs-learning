import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('tasks')
  getAllTasks() {
    return this.todoService.getAllTasks();
  }

  @Get('tasks/:id')
  getTaskById(@Param('id') id: string) {
    return this.todoService.getTaskById(id);
  }

  @Post('tasks')
  @HttpCode(201)
  createTask(@Body() body: CreateTaskDto) {
    return this.todoService.createTask(body);
  }

  @Patch('tasks/:id')
  @HttpCode(201)
  updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.todoService.updateTask(id, body);
  }

  @Delete('tasks/:id')
  @HttpCode(204)
  deleteTask(@Param('id') id: string) {
    return this.todoService.deleteTask(id);
  }
}
