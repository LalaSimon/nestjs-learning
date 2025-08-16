import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('user/:id')
  getPostByUserID(@Param('id') id: string) {
    return this.postService.getPostsByUserId(id);
  }
}
