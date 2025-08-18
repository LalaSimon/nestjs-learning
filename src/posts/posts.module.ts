import { Module } from '@nestjs/common';
import { RoleGuard } from 'src/users/guards/role.guard';
import { UsersModule } from 'src/users/users.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, RoleGuard],
  imports: [UsersModule],
})
export class PostsModule {}
