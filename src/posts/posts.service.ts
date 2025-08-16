import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './dto/createPost.dto';
import { randomUUID } from 'crypto';
import { EditPostDto } from './dto/editPost.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  createPost(id: string, body: CreatePostDto) {
    const user = this.usersService.getUser(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);

    if (user.posts?.find(post => post.title === body.title))
      throw new ConflictException('User has already post with this title');

    const newPost = {
      id: randomUUID(),
      title: body.title,
    };
    user.posts?.push(newPost);

    return newPost;
  }

  getPostsByUserId(id: string) {
    const user = this.usersService.getUser(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);

    if (user.posts?.length === 0) throw new NotFoundException(`User ${id} has no posts`);

    return user.posts;
  }

  editPost(userId: string, postId: string, body: EditPostDto) {
    const user = this.usersService.getUser(userId);
    if (!user) throw new NotFoundException(`User with this ${userId} id is not found`);

    const postToEdit = user?.posts?.find(post => post.id === postId);
    if (!postToEdit) throw new NotFoundException(`Post with id ${postId} not found`);

    const newPost = {
      ...postToEdit,
      ...body,
    };

    user.posts = user?.posts?.map(post => (post.id === postId ? newPost : post));

    return newPost;
  }

  deletePost(userId: string, postId: string) {
    const user = this.usersService.getUser(userId);
    if (!user) throw new NotFoundException(`User with this ${userId} id is not found`);

    const postToDelete = user?.posts?.find(post => post.id === postId);
    if (!postToDelete) throw new NotFoundException(`Post with id ${postId} not found`);

    user.posts = user?.posts?.filter(post => post.id !== postId);
  }
}
