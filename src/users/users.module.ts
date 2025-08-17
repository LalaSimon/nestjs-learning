import { Module } from '@nestjs/common';
import { RoleGuard } from './guards/role.guard';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RoleGuard],
  exports: [UsersService],
})
export class UsersModule {}
