import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';
import { type CreateUser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() userData: CreateUser) {
    return this.usersService.createUser(userData);
  }
}
