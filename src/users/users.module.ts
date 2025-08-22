import { Module } from '@nestjs/common';
import { RoleGuard } from './guards/role.guard';
import { GetUserGuard } from './guards/user-guard';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RoleGuard, GetUserGuard],
  exports: [UsersService],
})
export class UsersModule {}
