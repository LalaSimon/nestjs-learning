import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  HttpCode,
  Delete,
  Query,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(
    @Query('age', ParseIntPipe) age: number,
    @Query('isActive', ParseBoolPipe) isActive: boolean,
  ) {
    if (age || isActive !== undefined) {
      return this.usersService.getUsersByFilter(age, isActive);
    } else {
      return this.usersService.getAllUsers();
    }
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Patch(':id')
  @HttpCode(200)
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
