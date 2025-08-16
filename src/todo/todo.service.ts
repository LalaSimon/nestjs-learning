import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { randomUUID } from 'crypto';
import { UpdateTaskDto } from './dto/updateTask.dto';

type Task = {
  id: string;
  taskTitle: string;
  taskDescription?: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable()
export class TodoService {
  private tasks: Task[] = [];

  getAllTasks() {
    if (this.tasks.length === 0) throw new NotFoundException('No task found');

    return this.tasks;
  }

  getTaskById(id: string) {
    const task = this.tasks.find(task => task.id === id);

    if (!task) throw new NotFoundException(`Task ${id} is not found`);

    return task;
  }

  createTask(body: CreateTaskDto) {
    const existingTask = this.tasks.find(task => task.taskTitle === body.taskTitle);

    if (existingTask) throw new ConflictException('Task already registred');

    const newTask: Task = {
      id: randomUUID(),
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      ...body,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, body: UpdateTaskDto) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) throw new NotFoundException(`Task ${id} is not found`);

    const updatedTask: Task = {
      ...task,
      ...body,
      updatedAt: Date.now().toString(),
    };

    this.tasks = this.tasks.map(task => (task.id === id ? updatedTask : task));

    return updatedTask;
  }

  deleteTask(id: string) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) throw new NotFoundException(`Task ${id} is not found`);

    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
