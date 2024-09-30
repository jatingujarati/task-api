import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) { }

  async findAll(page: number, limit: number) {
    const [result, total] = await this.taskRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return { tasks: result, total };
  }

  async findOne(id: string) {
    const task = await this.taskRepository.findOne({
      where: { id, is_deleted: false },
    });
    if (!task) throw new NotFoundException(`Task ${id} not found`);
    return task;
  }

  async create(taskData: Partial<Task>) {
    const task = this.taskRepository.create(taskData);
    return this.taskRepository.save(task);
  }

  async update(id: string, taskData: Partial<Task>) {
    await this.taskRepository.update(id, taskData);
    return this.findOne(id);
  }

  async softDelete(id: string) {
    const task = await this.findOne(id);
    if (!task) throw new NotFoundException(`Task ${id} not found`);
    task.is_deleted = true;
    await this.taskRepository.save(task);
    return { message: 'Task deleted' };
  }
}
