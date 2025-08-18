import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserRole } from 'src/users/decorators/user-role.decorator';
import { RoleGuard } from 'src/users/guards/role.guard';
import { CreatePostDto } from './dto/createPost.dto';
import { EditPostDto } from './dto/editPost.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('user/:id')
  getPostByUserID(@Param('id') id: string) {
    return this.postService.getPostsByUserId(id);
  }

  @Post('user/:id')
  @HttpCode(201)
  createPostForUser(@Param('id') id: string, @Body() body: CreatePostDto) {
    return this.postService.createPost(id, body);
  }

  @UserRole('admin')
  @UseGuards(RoleGuard)
  @Patch('user/:userId/:postId')
  @HttpCode(200)
  editPost(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
    @Body() body: EditPostDto,
  ) {
    return this.postService.editPost(userId, postId, body);
  }

  @UserRole('admin')
  @UseGuards(RoleGuard)
  @Delete('user/:userId/:postId')
  @HttpCode(204)
  deletePost(@Param('userId') userId: string, @Param('postId') postId: string) {
    return this.postService.deletePost(userId, postId);
  }
}
