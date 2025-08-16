import { Controller, Get, Param, Body, Post, Patch } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/createPost.dto';
import { EditPostDto } from './dto/editPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('user/:id')
  getPostByUserID(@Param('id') id: string) {
    return this.postService.getPostsByUserId(id);
  }

  @Post('user/:id')
  createPostForUser(@Param('id') id: string, @Body() body: CreatePostDto) {
    return this.postService.createPost(id, body);
  }

  @Patch('user/:userId/:postId')
  editPost(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
    @Body() body: EditPostDto,
  ) {
    return this.postService.editPost(userId, postId, body);
  }
}
