import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserRole } from './decorators/user-role.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleGuard } from './guards/role.guard';
import { CustomAgePipe } from './pipes/custom-age.pipe';
import { CustomIsActivePipe } from './pipes/custom-is-active.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UserRole('admin')
  @UseGuards(RoleGuard)
  getAllUsers(
    @Query('age', CustomAgePipe) age: number,
    @Query('isActive', CustomIsActivePipe) isActive: boolean,
  ) {
    if (age !== undefined || isActive !== undefined) {
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
