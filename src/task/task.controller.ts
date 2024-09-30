import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { Task } from './task.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'Get all tasks with pagination' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiResponse({
    status: 200,
    description: 'List of tasks returned successfully',
  })
  @Get()
  async getAllTasks(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.taskService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Get a specific task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({ status: 200, description: 'Task returned successfully' })
  @Get(':id')
  async getTask(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'title' },
        description: { type: 'string', example: 'description' },
        status: { type: 'string', example: 'created' },
      },
      required: ['title', 'description', 'status'],
    },
  })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @Post()
  async createTask(@Body() taskData: Partial<Task>) {
    return this.taskService.create(taskData);
  }

  @ApiOperation({ summary: 'Update a task' })
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'title' },
        description: { type: 'string', example: 'description' },
        status: { type: 'string', example: 'created' },
      },
      required: ['title', 'description', 'status'],
    },
  })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() taskData: Partial<Task>) {
    return this.taskService.update(id, taskData);
  }

  @ApiOperation({ summary: 'Soft delete a task' })
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({ status: 200, description: 'Task soft-deleted successfully' })
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.softDelete(id);
  }
}
