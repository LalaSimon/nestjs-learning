import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UsersModule, PostsModule, TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
