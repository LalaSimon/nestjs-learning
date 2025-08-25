import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from './decorators/get-user.decorator';
import { SetUserContext } from './decorators/set-user.decorator';
import { UserRole } from './decorators/user-role.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFoundFilter } from './filters/users-exception.filter';
import { RoleGuard } from './guards/role.guard';
import { GetUserGuard } from './guards/user-guard';
import { CustomAgePipe } from './pipes/custom-age.pipe';
import { CustomIsActivePipe } from './pipes/custom-is-active.pipe';
import { type User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
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

  @UserRole('admin')
  @UseGuards(RoleGuard)
  @Get(':id')
  @SetUserContext('id')
  @UseGuards(GetUserGuard)
  @UseFilters(UserNotFoundFilter)
  getUser(@GetUser() user: User) {
    return user;
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Patch(':id')
  @SetUserContext('id')
  @UseGuards(GetUserGuard)
  @HttpCode(200)
  updateUser(@GetUser() user: User, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(user.id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  @SetUserContext('id')
  @UseGuards(GetUserGuard)
  deleteUser(@GetUser() user: User) {
    return this.usersService.deleteUser(user.id);
  }
}
